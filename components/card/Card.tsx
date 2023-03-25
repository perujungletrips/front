import Image from 'next/image'
import React from 'react'
import { TbCircleCheckFilled } from 'react-icons/tb';

type Props = {
  imgUrl: string,
};

const Card:React.FC<Props> = ({imgUrl}) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:w-full">
      <Image
        className="object-cover w-full h-96 md:h-auto md:w-1/2" 
        src={imgUrl} 
        alt="background image"
        priority
        width={1200}
        height={1200}
      />
      <div className="flex flex-col justify-between p-6 px-10 leading-normal">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Salkantay 4D</h1>
          <h3 className='mb-2 text-2xl'>$250.00</h3>
          <p className='text-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatibus vero velit facere modi nisi, expedita sed tempora voluptates sapiente quibusdam fuga tenetur! Nemo labore eius ducimus quo? Delectus, laboriosam?</p>
          <ul role="list" className="space-y-3 my-7">
            <li className="flex space-x-3">
                <TbCircleCheckFilled 
                  className='flex-shrink-0 w-6 h-6' 
                  aria-label='check icon'
                  aria-hidden='true'
                />
                <span className="text-base font-normal leading-tight">2 team members</span>
            </li>
            <li className="flex space-x-3">
                <TbCircleCheckFilled 
                  className='flex-shrink-0 w-6 h-6' 
                  aria-label='check icon'
                  aria-hidden='true'
                />
                <span className="text-base font-normal leading-tight">2 team members</span>
            </li>
            <li className="flex space-x-3">
                <TbCircleCheckFilled 
                  className='flex-shrink-0 w-6 h-6' 
                  aria-label='check icon'
                  aria-hidden='true'
                />
                <span className="text-base font-normal leading-tight">2 team members</span>
            </li>
            <li className="flex space-x-3">
                <TbCircleCheckFilled 
                  className='flex-shrink-0 w-6 h-6' 
                  aria-label='check icon'
                  aria-hidden='true'
                />
                <span className="text-base font-normal leading-tight">2 team members</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <TbCircleCheckFilled 
                  className='flex-shrink-0 w-6 h-6 dark:text-gray-500' 
                  aria-label='check icon'
                  aria-hidden='true'
                />
                <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
            </li>
        </ul>
        <button type="button" className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-900 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-60 text-center">Book Now</button>
      </div>
    </div>
  )
}

export default Card