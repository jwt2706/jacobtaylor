import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Card {
  id: number;
  title: string;
  description: string;
}

const CardCarousel: React.FC = () => {
  const items: Card[] = [
    { id: 1, title: 'Card 1', description: 'This is the description for card 1.' },
    { id: 2, title: 'Card 2', description: 'This is the description for card 2.' },
    { id: 3, title: 'Card 3', description: 'This is the description for card 3.' },
    { id: 4, title: 'Card 4', description: 'This is the description for card 4.' },
    { id: 5, title: 'Card 5', description: 'This is the description for card 5.' },
  ];

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    swipe: true,
    draggable: true,
    beforeChange: (current, next) => {
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

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <Slider {...settings}>
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
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
