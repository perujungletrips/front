import Image from 'next/image'
import React from 'react'
import Carousel from '../carousel/Carousel'
import CustomTable from '../customTable/CustomTable'
import Tabs from '../tabs/Tabs'


const images = [
  'img_1.jpg',
  'img_2.jpg',
  'img_3.jpg',
  'img_4.jpg',
  'img_5.jpg',
  'img_6.jpg',
];

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

const ExcursionInfo = () => {
  return (
    <div>
      <div className='mx-10 text-center border-b border-gray-200 sticky z-10 top-0 bg-white shadow-2xl shadow-gray-200 2xl:mx-0'>
        <Tabs ids={['Itinerary', 'Details', 'Gallery']}/>
      </div>
      <div className='mx-10 pt-16 2xl:mx-0' id='Itinerary'>
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
      <div className="mx-10 pt-16 2xl:mx-0" id='Details'>
        <h2 className='text-4xl mb-10'>Details</h2>
        <CustomTable rows={details}/>
      </div>
      <div className='pt-16 mx-0' id='Gallery'>
        <h2 className='text-4xl mb-10 ml-10 2xl:ml-0'>Gallery</h2>
        <div className="w-full h-72 lg:h-[32rem]">
          <Carousel
            autoSlide
            items={images.map((image, index) => 
              <Image
                src={`/${image}`}
                key={index}
                alt={`Slide image: ${image}`}
                width={800}
                height={533}
                className='h-full object-cover md:w-full'
              />
            )} 
          />
        </div>
      </div>
    </div>
  )
}

export default ExcursionInfo