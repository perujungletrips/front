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
];
const background = '/salkantay.png';
const title = 'Salkantay 4D';
const price = '250.00';
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatibus vero velit facere modi nisi, expedita sed tempora voluptates sapiente quibusdam fuga tenetur! Nemo labore eius ducimus quo? Delectus, laboriosam?'
const includes = [
  'Entrances',
  'Transportation',
  'Food & Drink'
]
const itinerary = [
  {
    title: 'Day 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae natus,a  adipisci ipsa obcaecati ab architecto nulla soluta culpa, ullam nisi optio provident quis deleniti delectus velit maiores? Odit, optio?'
  },
  {
    title: 'Day 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae natus, adipisci ipsa obcaecati ab architecto nulla soluta culpa, ullam nisi optio provident quis deleniti delectus velit maiores? Odit, optio?'
  },
  {
    title: 'Day 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae natus, adipisci ipsa obcaecati ab architecto nulla soluta culpa, ullam nisi optio provident quis deleniti delectus velit maiores? Odit, optio?'
  },
  {
    title: 'Day 4',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae natus, adipisci ipsa obcaecati ab architecto nulla soluta culpa, ullam nisi optio provident quis deleniti delectus velit maiores? Odit, optio?'
  }
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
        <div className='content'>
          <div className='max-w-6xl m-auto md:my-10 overflow-hidden' id='Background'>
            <Card imgUrl={background}>
              <h1 className="mb-2 text-4xl font-bold tracking-tight">{title}</h1>
              <span className='mb-2 text-2xl'>{`$${price}`}</span>
              <p className='text-normal'>{description}</p>
              <ul role="list" className="space-y-3 my-7">
                {includes.map((include, index) => (
                  <li className="flex space-x-3" key={index}>
                    <TbCircleCheckFilled 
                      className='flex-shrink-0 w-6 h-6' 
                      aria-label='check icon'
                      aria-hidden='true'
                    />
                    <span className="text-base font-normal leading-tight">{include}</span>
                  </li>
                ))}
                {/*<li className="flex space-x-3 line-through decoration-gray-500">
                  <TbCircleCheckFilled 
                    className='flex-shrink-0 w-6 h-6 dark:text-gray-500' 
                    aria-label='check icon'
                    aria-hidden='true'
                  />
                  <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                </li>*/}
              </ul>
              <a 
                href='#Booking'
                type="button" 
                className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-900 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-60 text-center"
              >Book Now</a>
            </Card>
          </div>

          <div className='max-w-6xl m-auto md:flex md:flex-wrap md:justify-between'>
            <div className='h-auto my-10 md:w-7/12'>
              <div className='' id='Itinerary'>
                <h2 className='text-4xl mb-10'>Itinerary</h2>
                {
                  itinerary.map((day, index) => (
                    <div className='md:my-10' key={index}>
                      <div className='flex justify-start items-center my-4'>
                        <div className='w-12 h-0 border-b-2 border-gray-500 mr-2'/>
                        <h3 className='text-2xl font-bold'>{day.title}</h3>
                      </div>
                      <p>{day.content}</p>
                    </div>
                  ))
                }
              </div>
              <div className='max-w-3xl m-auto' id='Gallery'>
                <h2 className='text-4xl mb-10'>Gallery</h2>
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
            <div className='bg-black h-72 my-10 static md:w-1/3 md:sticky md:top-0' id='Booking'>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
