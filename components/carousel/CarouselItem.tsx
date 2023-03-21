import React from 'react'

export interface CardProps{
  children?: React.ReactNode,
  index: number,
  activeIndex: number
}

function CarouselItem({children, index, activeIndex}: CardProps) {
  const offset = (index-activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
    rotateY(calc(   ${offset}    * -55deg))
    scaleY(calc(1 + ${absOffset} * (-0.5)))
    translateX(calc(${direction} * (3rem)))
    translateZ(calc(${absOffset} * (-35rem)))
  `;
  
  const cssOpacity = ` ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'} `;

  const cssDisplay = ` ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'} `;

  return (
    <div className='carousel-item'
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay
      }}
    >
      {children}
    </div>
  )
}

export default CarouselItem