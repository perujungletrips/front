import Card from '@/components/card/Card'
import Carousel from '@/components/carousel/Carousel'
import Head from 'next/head'
import Image from 'next/image'
import { Link, scroller } from 'react-scroll'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import Tabs from '@/components/tabs/Tabs'
import CustomTable from '@/components/customTable/CustomTable'

const images = [
  '/img_1.jpg',
  '/img_2.jpg',
  '/img_3.jpg',
  '/img_4.jpg',
  '/img_5.jpg',
  '/img_6.jpg',
];
const background = '/salkantay.png';
const title = 'Salkantay 4D';
const price = 250.00;
const privatePrice = 250.00;
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
const details = [
  {
    title: 'Departure location',
    description: 'Cusco'
  },
  {
    title: 'Departure time',
    description: '5:00 AM'
  },
  {
    title: 'Return location',
    description: 'Cusco'
  },
  {
    title: 'Return time',
    description: '5:00 PM'
  },
  {
    title: 'Included',
    items: [{value: 'transportation', check: true}, {value: 'Acomodations', check: true}, {value: 'Food & Drink', check: true}]
  },
  {
    title: 'Not Included',
    items: [{value: 'Transportation', check: false}, {value: 'Drinks', check: false}, {value: 'Sleeping bag', check: false}]
  },
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
        <div className='content max-w-6xl lg:max-w-screen-2xl m-auto'>
          <div className='overflow-hidden' id='Background'>
            <Card imgUrl={background}>
              <h1 className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
              <span className='mb-2 text-2xl'>{`$${price}`}</span>
              <p className='text-normal'>{description}</p>
              <ul role="list" className="space-y-3 my-7">
                {includes.map((include, index) => (
                  <li className="flex space-x-3" key={index}>
                    <IoCheckmarkSharp 
                      className='flex-shrink-0 w-5 h-5' 
                      aria-label='check icon'
                      aria-hidden='true'
                    />
                    <span className="text-base font-normal leading-tight">{include}</span>
                  </li>
                ))}
              </ul>
              <Link
                href='#Booking'
                to='Booking'
                smooth hashSpy
                className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-full text-md px-5 py-2.5 mx-5 w-auto text-center"
              >
                Book Now
              </Link>
            </Card>
          </div>

          <div className='mx-10 md:flex md:flex-wrap md:justify-between 2xl:mx-0'>
            <div className='h-auto md:w-7/12'>
              <div className='text-center border-b border-gray-200 sticky z-10 top-0 bg-white shadow-2xl shadow-gray-200'>
                <Tabs ids={['Itinerary', 'Details', 'Gallery']}/>
              </div>
              <div className='pt-16' id='Itinerary'>
                <h2 className='text-4xl mb-10'>Itinerary</h2>
                <ol className='relative border-l border-gray-400'>
                  {
                    itinerary.map((day, index) => (
                      <li className='mb-10 ml-6' key={index}>
                        <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <h3 className='text-2xl font-bold'>{day.title}</h3>
                        <p>{day.content}</p>
                      </li>
                    ))
                  }
                </ol>
              </div>
              <div className="pt-16" id='Details'>
                <h2 className='text-4xl mb-10'>Details</h2>
                <CustomTable rows={details}/>
              </div>
              <div className='pt-16' id='Gallery'>
                <h2 className='text-4xl mb-10 ml-10 2xl:ml-0'>Gallery</h2>
                <div className="w-full h-72 lg:h-[32rem]">
                  <Carousel
                    autoSlide={false}
                    items={images.map((image_url, index) => 
                      <Image
                        src={image_url}
                        key={index}
                        alt={'image'}
                        width={800}
                        height={533}
                        className='h-full object-cover md:w-full'
                      />
                    )} 
                  />
                </div>
              </div>
            </div>

            <div className='p-10 md:h-screen static md:w-1/3 md:sticky md:top-0 border-2' id='Booking'>
              <h3 className='text-2xl text-center font-semibold'>Booking Form</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
