import Card from '@/components/card/Card'
import Carousel from '@/components/carousel/Carousel'
import Head from 'next/head'
import Image from 'next/image'
import { IoCheckmarkSharp, IoCloseSharp, IoEllipse } from 'react-icons/io5'

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
const details = {
  included: ['transportation', 'Acomodations', 'Food & Drink'],
  notIncluded: ['Transportation', 'Drinks', 'Sleeping bag'],
  others: [
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
    }
  ]
}

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
        <div className='content max-w-screen-2xl m-auto'>
          <div className='my-10 overflow-hidden' id='Background'>
            <Card imgUrl={background}>
              <h1 className="mb-2 text-4xl font-bold tracking-tight">{title}</h1>
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
              <a 
                href='#Booking'
                type="button" 
                className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-900 font-medium rounded-full text-sm px-5 py-2.5 inline-flex justify-center w-60 text-center"
              >Book Now</a>
            </Card>
          </div>

          <div className='md:flex md:flex-wrap md:justify-between'>
            <div className='h-auto md:w-7/12'>
              <div className='px-10 my-10 md:px-0' id='Itinerary'>
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
              <div className="px-10 my-10 md:px-0" id='Details'>
                <h2 className='text-4xl mb-10'>Details</h2>
                <table className="w-full text-sm text-left">
                  <tbody>
                    { details.others.map( (detail, index) => (
                      <tr className='border-b border-t' key={index}>
                        <th scope='row' className='py-4'>
                          {detail.title}
                        </th>
                        <td className='px-4 md:px-6 py-4'>
                          {detail.description}
                        </td>
                      </tr>
                    ))}
                    <tr className='border-b border-t'>
                      <th scope='row' className='py-4'>
                        Included
                      </th>
                      <td className='px-4 md:px-6 py-4'>
                        <ul className='space-y-1 list-inside '>
                          { details.included.map((include, index) =>
                            <li className='flex items-center' key={index}>
                              <IoCheckmarkSharp 
                                className='text-green-500 w-4 h-4 mr-1.5'
                                aria-label='check icon'
                                aria-hidden='true'
                              />
                              {include}
                            </li>
                          )}
                        </ul>
                      </td>
                    </tr>
                    <tr className='border-b border-t'>
                      <th scope='row' className='py-4'>
                        Not Included
                      </th>
                      <td className='px-4 md:px-6 py-4'>
                        <ul className='space-y-1 list-inside '>
                          { details.notIncluded.map((notInclude, index) =>
                            <li className='flex items-center' key={index}>
                              <IoCloseSharp
                                className='text-red-400 w-4 h-4 mr-1.5'
                                aria-label='check icon'
                                aria-hidden='true'/>
                              {notInclude} 
                            </li>
                          )}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='' id='Gallery'>
                <h2 className='text-4xl mb-10 px-10 md:px-0'>Gallery</h2>
                <div className="w-full h-72 lg:h-[32rem] border-2">
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

            <div className='bg-black h-72 my-10 static md:w-1/3 md:sticky md:top-0' id='Booking'>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
