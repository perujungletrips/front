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
    <div className='absolute bottom-4 right-0 left-0'>
      <div className='flex items-center justify-center gap-2'>
        {Array.from(Array(maxIndicator), (_, index) => {
          return(
            <div 
              key={index}
              className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer duration-1000 ${activeIndex === index ? 'w-6': 'bg-opacity-50'}`}
              onClick={() => onChange(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CarouselIndicator