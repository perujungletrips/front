import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";

type Props = {
  width?: number,
  height?: number,
  items: React.ReactNode[],
};

const Carousel: React.FC<Props> = ({ width, height, items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  function handleNextItemBtn(){
    setActiveIndex((prev)=>{
      return prev+1 < items.length ? prev+1: prev
    })
  } 

  function handlePrevItemBtn(){
    setActiveIndex((prev)=>{
      return prev-1 < 0 ? prev: prev-1
    })
  }

  return (
    <div className="carousel-container">
      { activeIndex > 0 && 
        <button
          onClick={handlePrevItemBtn} 
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
        >
          <IoChevronBack />
        </button>
      }
      {items.map((item, index) => 
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      )}
      { activeIndex < items.length-1 &&
        <button 
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoChevronBack
            style={{transform:'rotate(180deg)'}}
          />
        </button>
      }
      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onChange={(index) => {
          setActiveIndex(index)
        }}
      />
    </div>
  );
};

export default Carousel;