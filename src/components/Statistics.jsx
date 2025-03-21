import React from 'react'

export const Statistics = ({number, description}) => {
  return (
    <div className='flex flex-col'>
        <h3 className='text-h3'>{number}+</h3>
        <p className='text-xs'>{description}</p>
    </div>
  )
}
