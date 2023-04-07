import Image from 'next/image'
import React from 'react'
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram } from 'react-icons/io5'
import { FaFacebook, FaGoogle, FaInstagram, FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-white '>
      <div className='max-w-6xl m-auto flex flex-wrap justify-between items-center'>
        <div className='pt-10 md:py-10 flex flex-col items-center w-full md:w-1/3'>
          <span className='text-3xl mb-4'>Contact Us</span>
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
            className='w-auto h-52'
          />
        </div>
        <div className='py-10 flex flex-col items-center w-full md:w-1/3 text-xl'>
          <span className='text-3xl mb-4'>Stay Connected</span>
          <div className='w-full flex felx-row justify-center'>
            <button type='button' className='mx-2 hover:text-white/80' aria-label="Social button">
              <FaInstagram />
            </button>
            <button type='button' className='mx-2 hover:text-white/80' aria-label="Social button">
              <FaFacebook />
            </button>
            <button type='button' className='mx-2 hover:text-white/80' aria-label="Social Google">
              <FaGoogle />
            </button>
            <button type='button' className='mx-2 hover:text-white/80' aria-label="Social TripAdvisor">
              <FaTripadvisor />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 text-center text-sm text-gray-200 py-2'>
        &#169; 2023 - Peru Jungle Trips
      </div>
    </div>
  )
}

export default Footer