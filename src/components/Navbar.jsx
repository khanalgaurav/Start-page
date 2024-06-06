import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-3 py-5'>
        <p className='text-3xl font-bold underline'>Omayera</p>
        <div className=''>
            <input id='toggle-checkbox' className='hidden' type="checkbox" />
            <label className='hover:cursor-pointer w-[60px] h-[25px] rounded-full bg-gray-400 relative block before:absolute before:rounded-full before:block before:content-[""] before:h-[25px] before:w-[35px] before:bg-blue-500 ' htmlFor='toggle-checkbox'></label>
        </div>
    </div>
  )
}

export default Navbar
