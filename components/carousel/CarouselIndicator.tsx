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
        const pos = maxIndicator-index-1
        return(
          <div 
            key={pos}
            className={`carousel-indicator-dots ${activeIndex === pos ? 'w-4 opacity-100': 'w-2 bg-gray-400'}`}
            onClick={() => onChange(pos)}
          />
        )
      })}
    </div>
  )
}

export default CarouselIndicator