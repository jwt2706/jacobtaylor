import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SCROLLSPEED = 0.1

gsap.registerPlugin(ScrollTrigger);

const ProjectCarousel: React.FC = () => {
  const cardsRef = useRef<HTMLUListElement | null>(null);
  const seamlessLoopRef = useRef<GSAPTimeline | null>(null);
  const scrubRef = useRef<GSAPTween | null>(null);
  let iteration = 0;

  const spacing = 0.1;
  const snap = gsap.utils.snap(spacing);

  const buildSeamlessLoop = (items: HTMLElement[], spacing: number): GSAPTimeline => {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      }
    });

    const l = items.length + overlap * 2;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (let i = 0; i < l; i++) {
      const index = i % items.length;
      const item = items[index];
      const time = i * spacing;
      rawSequence.fromTo(
        item,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: 'power1.in', immediateRender: false },
        time
      ).fromTo(
        item,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
        time
      );

      if (i <= items.length) seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: 'none'
    }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: 'none'
    });

    return seamlessLoop;
  };

  const scrubTo = (totalTime: number) => {
    if (seamlessLoopRef.current && cardsRef.current) {
      const cards = gsap.utils.toArray(cardsRef.current.children) as HTMLElement[];
      const totalDuration = seamlessLoopRef.current.duration();
      let progress = (totalTime - totalDuration * iteration) / totalDuration;

      if (progress > 1) {
        wrapForward();
      } else if (progress < 0) {
        wrapBackward();
      } else {
        const centerOffset = (window.innerWidth - 256) / 2; // 256 is the width of the card (w-64 in Tailwind)
        ScrollTrigger.getById('scroll-trigger').scroll(progress * (3000 - centerOffset)); // Adjust to center the card
      }
    }
  };

  const wrapForward = () => {
    iteration++;
    ScrollTrigger.getById('scroll-trigger').scroll(0 + SCROLLSPEED);
  };

  const wrapBackward = () => {
    iteration--;
    if (iteration < 0) {
      iteration = 9;
      if (seamlessLoopRef.current) {
        seamlessLoopRef.current.totalTime(seamlessLoopRef.current.totalTime() + seamlessLoopRef.current.duration() * 10);
        scrubRef.current?.pause();
      }
    }
    ScrollTrigger.getById('scroll-trigger').scroll(3000 - SCROLLSPEED);
  };

  useEffect(() => {
    if (cardsRef.current) {
      const cards = gsap.utils.toArray(cardsRef.current.children) as HTMLElement[];
      seamlessLoopRef.current = buildSeamlessLoop(cards, spacing);
      scrubRef.current = gsap.to(seamlessLoopRef.current, {
        totalTime: 0,
        duration: 0.5,
        ease: 'power3',
        paused: true
      });

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "+=3000",
        pin: ".gallery",
        onUpdate: (self) => {
          if (self.progress === 1 && self.direction > 0) {
            wrapForward();
          } else if (self.progress < 1e-5 && self.direction < 0) {
            wrapBackward();
          } else {
            scrubRef.current!.vars.totalTime = snap((iteration + self.progress) * seamlessLoopRef.current!.duration());
            scrubRef.current!.invalidate().restart();
          }
        },
        id: 'scroll-trigger'
      });

      return () => {
        // Cleanup GSAP
        trigger.kill();
        seamlessLoopRef.current?.kill();
      };
    }
  }, []);

  return (
    <div className="gallery flex flex-col items-center">
      <ul className="cards flex overflow-hidden space-x-4" ref={cardsRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="flex-shrink-0 w-64 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center text-lg font-bold text-gray-800">
            Card {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCarousel;
