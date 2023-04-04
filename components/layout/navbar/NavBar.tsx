import Image from 'next/image'
import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

const menu = [
  {title: 'Home'},
  {title: 'About Us'},
  {title: 'Trecks & Trails'},
  {title: 'Amazon Expeditios'},
  {title: 'Packages'},
  {title: 'Contact Us'}
]

const NavBar = () => {
  const [active, setActive] = useState(0)
  const [menuClicked, setMenuClicked] = useState(false)

  return (
    <nav className='absolute top-0 w-full bg-transparent'>
      <div className={`relative w-full max-w-screen-xl flex px-5 items-center md:items-start justify-between
      md:px-10 `}>
        <a href="#" className=' flex items-center'>
          <Image
             src={'/logo.png'}
             width={250}
             height={250}
             alt='logo image'
             className='w-auto h-24'
          />
        </a>
        <div className={`absolute right-0 top-0 py-10 overflow-hidden ml-auto bg-black/75 backdrop-blur-sm md:backdrop-blur-0 md:relative md:block md:bg-transparent md:w-auto md:h-auto transition-all duration-200 ease-in ${menuClicked? 'w-2/3 h-screen':'w-0 h-0'}`}>
          <ul className={`text-center flex flex-col md:flex-row md:flex-wrap items-center justify-between font-semibold`}>
            {menu.map((item, index)=>(
              <li className='list-none px-5 py-2' key={index}>
                <a href="#" className={`
                text-white md:text-gray-800
                 no-underline
                 drop-shadow-[0_1.2px_1.2px_rgba(180,180,180,.5)]
                hover:text-[#ffcc00]
                md:hover:text-[#ffcc00]
                 hover:after:w-5/12 
                 hover:after:h-[2px]
                hover:after:bg-[#ffcc00]
                 hover:after:absolute
                 hover:after:-bottom-[4px] 
                 hover:after:left-0 
                 hover:after:content-[""] 
                 duration-200 ease-out transform transition-all 
                 ${active === index? 'text-[#ffcc00] md:text-[#ffcc00] after:w-5/12 after:h-[2px] after:bg-[#ffcc00] after:absolute after:-bottom-[4px] after:left-0 after:content-[""]':'after:w-0'}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative z-10 text-4xl text-white font-bold md:hidden ${menuClicked?'':''}`}>
          {!menuClicked?
            <IoMenu onClick={()=>setMenuClicked(true)} className=''/>
            :<IoClose onClick={()=>setMenuClicked(false)} className=''/> 
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar