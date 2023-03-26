import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import CarouselIndicator from "./CarouselIndicator";

type Props = {
  autoSlide?: boolean,
  autoSlideInterval?: number,
  items: React.ReactNode[],
};

const Carousel: React.FC<Props> = ({ items, autoSlide=false, autoSlideInterval=5000 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  function handleNextItemBtn(){
    setActiveIndex((prev)=>{
      return prev === items.length-1 ? 0: prev+1
    })
  } 

  function handlePrevItemBtn(){
    setActiveIndex((prev)=>{
      return prev === 0 ? items.length-1: prev-1
    })
  }
  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(handleNextItemBtn, autoSlideInterval)
    return () => clearInterval(slideInterval) 
  }, [autoSlide, autoSlideInterval])
  
  return (
    <div className="overflow-hidden relative w-full h-full">
      
      {items.map((item, index) => 
        <div
          key={index}
          className = {`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100':'opacity-0'}`}
        >
          {item}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-between p-4 text-3xl">
        <button
          onClick={handlePrevItemBtn}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white "
          aria-label="prev button"
        >
          <IoChevronBack />
        </button>
        <button
          onClick={handleNextItemBtn}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="next button"
        >
          <IoChevronBack style={{rotate:'180deg'}}/>
        </button>
      </div>
      <CarouselIndicator activeIndex={activeIndex} onChange={(index)=> setActiveIndex(index)} length={items.length}/>
    </div>
  );
};

export default Carousel;