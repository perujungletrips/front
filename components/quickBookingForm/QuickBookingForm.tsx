import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { MdCalendarToday, MdGroups } from 'react-icons/md'

type Props = {
};

const packageLen = 5

const today = new Date()
const start = new Date(today)
start.setDate(today.getDate() + 2)
const end = new Date(today)
end.setDate(today.getDate() + 2 + packageLen - 1)


const QuickBookingForm:React.FC<Props> = ({}) => {
  const [privateEnable, setPrivateEnable] = useState(false)
  const [startDate, setStartDate] = useState(start)
  const [endDate, setEndDate] = useState(end)
  
  const changeStartDate = (newDate: Date) => {
    setStartDate(newDate)
    const tmp = new Date(newDate)
    tmp.setDate(newDate.getDate()+packageLen-1)
    setEndDate(tmp)
  }

  return (
    <div>
      <h3 className='text-2xl text-center'>Booking Form</h3>
      <form action="">
        <label className='relative inline-flex items-center'>
          <input 
            type="checkbox" 
            checked={privateEnable} 
            onChange={()=>setPrivateEnable(!privateEnable)}
            className="sr-only peer"
          />
          <div className={`cursor-pointer w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
          peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white`} />
          <span className={`ml-3 text-sm font-medium transition-all ${privateEnable ? 'text-gray-900':'text-gray-400'}`}>Private</span>
        </label>
        <div className="relative flex items-center h-16">
          <MdGroups className='mr-2'/>
          <label htmlFor="adult-count" className='block text-sm text-gray-900 text-right pr-4'>Adult</label>
          <input 
            className='absolute right-2 border-2 w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2'
            type='number' min={1} max={6} defaultValue={1} id='adult-count'/>
        </div>
        <div className="relative flex items-center h-16">
          <MdGroups className='mr-2'/>
          <label htmlFor="child-count" className='block text-sm text-gray-900 text-right pr-4'>Child</label>
          <input 
            className='absolute right-2 border-2 w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2'
            type='number' min={0} max={6} defaultValue={0} id='child-count'/>
        </div>
        <div className='relative flex items-center h-16'>
          <MdCalendarToday className='mr-2'/>
          <label htmlFor="Startdate" className='block text-sm text-gray-900 text-right pr-4'>Start date</label>
          <div className='absolute right-2'>
            <DatePicker
              id='Startdate' 
              selected={startDate} 
              minDate={start}
              startDate={startDate}
              endDate={endDate}
              yearDropdownItemNumber={1}
              shouldCloseOnSelect={false}
              dateFormat={'MMM dd, yyy'}
              onChange={(date) => changeStartDate(date as Date)}
              className={`w-48 border-gray-300 cursor-pointer border-2 rounded-lg p-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-300 `}
            />
          </div>
        </div>
        <div className='flex justify-center items-center h-16'>
          <button 
            type="submit"
            className='text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-full text-md px-5 py-2.5 w-3/4 text-center'
          >
            Book this tour
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuickBookingForm