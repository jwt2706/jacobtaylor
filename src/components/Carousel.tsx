import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Repo {
  id: number;
  name: string;
  description: string;
  avatar_url: string;
  html_url: string;
  homepage?: string;
}

const CardCarousel: React.FC = () => {
  const [items, setItems] = useState<Repo[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    swipe: true,
    draggable: true,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleScroll = (event: WheelEvent) => {
    if (sliderRef.current) {
      if (event.deltaY > 0) {
        // Scrolling down
        sliderRef.current.slickNext();
      } else {
        // Scrolling up
        sliderRef.current.slickPrev();
      }
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jwt2706/repos');
        const repos = await response.json();
        const filteredRepos = repos
          .filter((repo: any) => repo.description?.includes('[s!]'))
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description.replace(/\[s!\]/g, '').trim() || 'No description available.',
            avatar_url: repo.owner.avatar_url,
            html_url: repo.html_url,
            homepage: repo.homepage,
          }));
        setItems(filteredRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {items.map((item, index) => (
        <div key={item.id} className="px-8">
          <motion.div
            className="border border-gray-300 p-6 rounded-lg text-center bg-white shadow-md h-64"
            animate={{
              scale: index === activeSlide ? 1 : 0.8,
              opacity: index === activeSlide ? 1 : 0.5,
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={item.avatar_url} alt={item.name} className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded mb-2">
              View Repository
            </a>
            {item.homepage && (
              <a href={item.homepage} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded">
                View GitHub Pages
              </a>
            )}
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
