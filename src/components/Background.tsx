import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBackground: React.FC = () => {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bgElement = bgRef.current;

        if (bgElement) {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            tl.to(bgElement, {
                duration: 5,
                backgroundPosition: "200% 200%",
                ease: "linear",
            })
                .to(bgElement, {
                    duration: 5,
                    scale: 1.2,
                    rotation: 360,
                    ease: "power1.inOut",
                }, "-=5")
                .to(bgElement, {
                    duration: 5,
                    opacity: 0.5,
                    ease: "power1.inOut",
                }, "-=5");
        }
    }, []);

    return (
        <div
            ref={bgRef}
            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            style={{
                backgroundSize: "400% 400%",
                zIndex: -1,
            }}
        ></div>
    );
};

export default AnimatedBackground;