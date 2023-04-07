import React from 'react'
import CustomTable from '../../customTable/CustomTable'

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

const Details = () => {
  return (
    <div className="mx-10 2xl:mx-0" id='Details'>
      <h2 className='text-4xl mb-10'>Details</h2>
      <CustomTable rows={details}/>
    </div>
  )
}

export default Details