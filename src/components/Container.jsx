import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className='container mx-auto px-10'>
      {children}
    </div>
  )
}
