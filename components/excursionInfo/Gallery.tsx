import Image from 'next/image'
import React from 'react'
import Carousel from '../carousel/Carousel'

const images = [
  'img_1.jpg',
  'img_2.jpg',
  'img_3.jpg',
  'img_4.jpg',
  'img_5.jpg',
  'img_6.jpg',
];

const Gallery = () => {
  return (
    <div className='pt-16 mx-0' id='Gallery'>
      <h2 className='text-4xl mb-10 ml-10 2xl:ml-0'>Gallery</h2>
      <div className="w-full h-72 lg:h-[32rem]">
        <Carousel
          autoSlide
          items={images.map((image, index) => 
            <Image
              src={`/${image}`}
              key={index}
              alt={`Slide image: ${image}`}
              width={800}
              height={533}
              className='h-full object-cover md:w-full'
            />
          )} 
        />
      </div>
    </div>
  )
}

export default Gallery