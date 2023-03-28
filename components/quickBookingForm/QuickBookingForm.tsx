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
    <div className='border p-10 rounded-md'>
      <h3 className='text-2xl text-center'>Booking Form</h3>
      <form action="">
        <div className='h-16 flex items-center'>
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
        </div>
        <div className="relative flex items-center h-16">
          <MdGroups className='absolute left-2 mr-2'/>
          <select 
            name="adults"
            className='cursor-pointer border-2 w-full border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2 pl-10'
            defaultValue={0}
          >
            <option value={0}>Number of adults</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
        <div className="relative flex items-center h-16">
          <span className='absolute left-2 font-semibold text-xs'>{'<18'}</span>
          <select 
            name="minors"
            className='cursor-pointer border-2 w-full border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2 pl-10'
            defaultValue={0}
          >
            <option value={0}>Number of minors</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
        <div className='relative flex items-center h-16'>
          <MdCalendarToday className='absolute left-2 z-10 mr-2'/>
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
            className={`w-full border-gray-300 cursor-pointer border-2 rounded-lg p-2 pl-10 text-sm focus:outline-none focus:ring-4 focus:ring-blue-300`}
          />
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