import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 px-8 bg-gray-800 text-white'>
      <h2 className='text-2xl font-bold'>Siddharth</h2>
      <div className='flex gap-10'>
        <Link className='text-medium font-bold' to='/'>Home</Link>
        <Link className='text-medium font-bold'to='/about'>About</Link>
        <Link className='text-medium font-bold' to='/courses'>Courses</Link>
        <Link className='text-medium font-bold' to='/product'>Product</Link>
      </div>
      
    </div>
  )
}

export default navbar
