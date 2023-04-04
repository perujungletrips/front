import Card from '@/components/card/Card'
import Head from 'next/head'
import { Link } from 'react-scroll'
import { IoCheckmarkSharp } from 'react-icons/io5'
import 'react-datepicker/dist/react-datepicker.css'
import QuickReserve from '@/components/quickReserve/QuickReserve'
import ExcursionInfo from '@/components/excursionInfo/ExcursionInfo'

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

export default function tour_example() {
  return (
    <>
      <Head>
        <title>Peru Jungle Trips</title>
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

          <div className='md:flex md:flex-wrap md:justify-between 2xl:mx-0'>
            <div className='h-auto md:w-7/12'>
              <ExcursionInfo />
            </div>

            <div className='static w-full md:px-10 md:h-screen md:w-4/12 md:sticky md:top-0' id='Booking'>
              <div className='mb-10 border px-10 py-6 rounded-md'>
                <QuickReserve />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
