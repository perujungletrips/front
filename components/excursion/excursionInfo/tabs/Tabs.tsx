import React from 'react'
import { Link } from 'react-scroll'

type Props = {
  ids: string[],
};

const Tabs: React.FC<Props> = ({ids}) => { 
  return (
    <ul className="flex flex-wrap -mb-px">
      {ids.map((id, index) => 
        <li className="mr-2" key={index}>
          <Link
            href={`#${id}`}
            to={id}
            smooth spy hashSpy
            activeClass='text-black border-black' 
            className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg hover:text-black hover:border-black`}
          >
            {id}
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Tabs