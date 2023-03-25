import Image from 'next/image'
import React from 'react'
import { TbCircleCheckFilled } from 'react-icons/tb';

type Props = {
  imgUrl: string,
  children: React.ReactNode
};

const Card:React.FC<Props> = ({imgUrl, children}) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:w-full">
      <Image
        className="object-cover w-full h-96 md:h-auto md:w-1/2" 
        src={imgUrl} 
        alt="background image"
        width={1000}
        height={1000}
        priority
      />
      <div className="flex flex-col justify-between p-6 px-10 leading-normal">
          {children}
      </div>
    </div>
  )
}

export default Card