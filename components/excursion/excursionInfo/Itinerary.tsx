import React from 'react'

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

const Itinerary = () => {
  return (
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
  )
}

export default Itinerary