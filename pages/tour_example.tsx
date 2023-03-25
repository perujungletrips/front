import Card from '@/components/card/Card'
import Carousel from '@/components/carousel/Carousel'
import Head from 'next/head'
import Image from 'next/image'
import { TbCircleCheckFilled } from 'react-icons/tb'

const images = [
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
  '/img_1.jpg',
]

export default function tour_example() {
  return (
    <>
      <Head>
        <title>tour</title>
        <meta name="description" content="Peru Jungle Trips tour" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=''>
          <div className='max-w-6xl m-auto md:my-10 overflow-hidden'>
            <Card imgUrl='/salkantay.png'>
              <h1 className="mb-2 text-4xl font-bold tracking-tight">Salkantay 4D</h1>
              <span className='mb-2 text-2xl'>$250.00</span>
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
            </Card>
          </div>
          <div className='max-w-3xl m-auto'>
            <Carousel
              autoSlide={true}
              items={images.map((image_url, index) => 
                <Image
                  src={image_url}
                  key={index}
                  alt={'image'}
                  width={800}
                  height={533}
                  className='h-full w-full'
                />
              )} 
            />
          </div>
        </div>
      </main>
    </>
  )
}
