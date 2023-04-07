import Image from 'next/image'
import React from 'react'

type Props = {
  imgUrl: string,
  children: React.ReactNode
};

const Header:React.FC<Props> = ({imgUrl, children}) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:w-full">
      <Image
        className="object-cover w-full h-96 md:h-auto md:w-1/2 xl:w-7/12" 
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

export default Header