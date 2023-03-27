import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5';

type Props = {
  headers?: string[],
  rows?: {
    title: String, 
    description?: String, 
    items?: {value: String, check: boolean}[]
  }[]
};

const CustomTable: React.FC<Props> = ({headers, rows}) => {
  return (
    <table className='w-full text-sm text-left'>
      {headers &&
        <thead className='text-xs uppercase bg-gray-50'>
          <tr>
            {headers.map((header, index)=>
              <th className='px-6 py-3' key={index}>{header}</th>
            )}
          </tr>
        </thead>
      }
      {rows && 
        <tbody>
          {rows.map((row, index)=>
            <tr className='border-b border-t' key={index}>
              <th scope='row' className='py-4'>
                {row.title}
              </th>
              <td className='px-4 md:px-6 py-4'>
                {row.description && row.description }
                {row.items && 
                  <ul className='space-y-1 list-inside '>
                    { row.items.map((item, index) =>
                      <li className='flex items-center' key={index}>
                        {item.check 
                          ?<IoCheckmarkSharp 
                            className='text-green-500 w-4 h-4 mr-1.5'
                            aria-label='check icon'
                            aria-hidden='true'
                          />
                          :<IoCheckmarkSharp 
                            className='text-red-500 w-4 h-4 mr-1.5'
                            aria-label='negative icon'
                            aria-hidden='true'
                          />
                        }
                        {item.value}
                      </li>
                    )}
                  </ul>
                }
              </td>
            </tr>
          )}
        </tbody>
      }
    </table>
  )
}

export default CustomTable