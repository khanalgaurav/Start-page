import React, { useState,useEffect } from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import './Navbar.css'
const Navbar = ({darkMode,setDarkMode}) => {
  const getLocalStorageCheck = ()=>{
    let check = localStorage.getItem('check')
    if(check){
      return JSON.parse(check);
    }else{
      return false;
    }
  }
  const [checked,setChecked] = useState(getLocalStorageCheck())

  useEffect(()=>{
    localStorage.setItem('check',JSON.stringify(checked))
  },[darkMode])
  return (
    <div className='flex justify-between items-center px-3 py-5'>
        <p className='text-3xl font-bold underline dark:text-gray-300'>Omayera</p>
        <div className=''>
            <input id='toggle-checkbox' className='hidden' type="checkbox" checked={checked} onChange={()=>{}} />
            <label onClick={()=>{setDarkMode(!darkMode);setChecked(!checked)}} className='flex justify-between hover:cursor-pointer w-[60px] h-[25px] rounded-full bg-[#d9d9d9] shadow-md dark:shadow-[#1b1b1b] shadow-gray-400 relative before:absolute before:rounded-full before:block before:content-[""] before:h-[25px] before:w-[35px] dark:before:bg-gray-500 before:bg-gray-600 before:z-10 ' htmlFor='toggle-checkbox'>
              <CiDark className='text-xl font-semibold dark:text-gray-300 absolute top-0.5 left-1'/>
              <CiLight className=' text-xl font-semibold absolute top-0.5 right-1'/>
            </label>
        </div>
    </div>
  )
}

export default Navbar
