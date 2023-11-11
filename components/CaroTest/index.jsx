import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CaroTest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div>

      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>

        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>
        <div>Item 4</div>

      </Carousel>
    </div>
  )
}

export default CaroTest