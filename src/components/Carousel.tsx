import React from 'react';
import Slider from 'react-slick';
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

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="px-2">
          <div className="border border-gray-300 p-4 rounded-lg text-center bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
