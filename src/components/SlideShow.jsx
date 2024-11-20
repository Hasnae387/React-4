import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import '../styles/SlideShow.css';

function Slideshow() {
  const items = [
    {
      image: "src/assets/img_Home/img9.jpg",
    },
    {
      image: "src/assets/img_Home/img8.jpg",
    },
    {
      image: "src/assets/img_Home/img10V2.jpg",
    }
  ];

  return (
    <Carousel >
      {items.map((item, i) => (
        <SlideItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

function SlideItem({ item }) {
  return (
    <Paper
      className="slide-item"
      style={{ backgroundImage: `url(${item.image})`}}
    />
  );
}

export default Slideshow;
