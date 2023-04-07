import React from 'react'
import Tabs from './tabs/Tabs'
import Details from './Details'
import Gallery from './Gallery'
import Itinerary from './Itinerary'

const ExcursionInfo = () => {
  return (
    <div>
      <div className='mx-10 text-center border-b border-gray-200 sticky z-10 top-0 bg-white shadow-2xl shadow-gray-200 2xl:mx-0'>
        <Tabs ids={['Itinerary', 'Details', 'Gallery']}/>
      </div>
      <div className='my-14'>
        <Itinerary />
      </div>
      <div className='my-14'>
        <Details />
      </div>
      <div className='my-14'>
        <Gallery />
      </div>
    </div>
  )
}

export default ExcursionInfo