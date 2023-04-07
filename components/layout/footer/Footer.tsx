import Image from 'next/image'
import React from 'react'
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram } from 'react-icons/io5'
import { FaFacebook, FaGoogle, FaInstagram, FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-white '>
      <div className='max-w-6xl m-auto flex flex-wrap justify-between items-center'>
        <div className='pt-10 md:py-10 flex flex-col items-center w-full md:w-1/3'>
          <h6 className='text-xl mb-4'>Contact Us</h6>
          <div>
            <p className='text-sm mb-1'><span className='font-bold'>Address: </span> Procuradores N°385</p>
            <p className='text-sm mb-1'><span className='font-bold'>Phone: </span> +51 924 353 276</p>
            <p className='text-sm mb-1'><span className='font-bold'>E-Mail: </span> info@perujungletrips.com</p>
          </div>
        </div>
        <div className='pt-10 md:py-10 flex flex-col items-center w-full md:w-1/3'>
          <Image
            src={'/logo.png'}
            width={200}
            height={200}
            alt='footer logo'
            className='h-36 w-auto'
          />
        </div>
        <div className='py-10 flex flex-col items-center w-full md:w-1/3 text-xl'>
          <h6 className='text-xl mb-4'>Visit our sites</h6>
          <div className='w-full flex felx-row justify-center'>
            <button type='button' className='mx-2 hover:text-white/80'>
              <FaInstagram />
            </button>
            <button type='button' className='mx-2 hover:text-white/80'>
              <FaFacebook />
            </button>
            <button type='button' className='mx-2 hover:text-white/80'>
              <FaGoogle />
            </button>
            <button type='button' className='mx-2 hover:text-white/80'>
              <FaTripadvisor />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 text-center text-sm text-gray-600 font-bold py-2'>
        &#169; 2023 - Peru Jungle Trips
      </div>
    </div>
  )
}

export default Footer