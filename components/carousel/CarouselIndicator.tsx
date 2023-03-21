import React from 'react'

export interface CarouselIndicatorProps{
  activeIndex: number,
  length: number,
  maxindicatorVisible?: number,
  onChange: (index: number) => void
}

function CarouselIndicator({activeIndex, length, maxindicatorVisible = 5, onChange}: CarouselIndicatorProps) {
  const maxIndicator = length > maxindicatorVisible ? maxindicatorVisible : length;

  return (
    <div
      className='carousel-indicator-container'
    >
      {Array.from(Array(maxIndicator), (_, index) => {
        return(
          <div 
            key={index}
            className={`carousel-indicator-dots ${activeIndex === index ? 'w-4 opacity-100': 'w-2 bg-gray-400'}`}
            onClick={() => onChange(index)}
          />
        )
      })}
    </div>
  )
}

export default CarouselIndicator