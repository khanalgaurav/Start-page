import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="my-5">
        <form action="https://www.google.com/search" method="GET">
          <div className="shadow-lg shadow-gray-300 text-xl bg-[#d2d2d2] bg-opacity-65 dark:bg-[#2c2c2c] dark:shadow-[#1b1b1b] dark:border dark:border-[#1b1b1b] rounded-2xl px-5 mx-[25%] py-2 flex justify-between">
              <input className="bg-transparent focus:outline-none w-full dark:text-gray-300" type="text" name="q" placeholder="Search Box"/>
              <button className="" type="submit" ><FaMagnifyingGlass className='dark:text-gray-300'/></button>
          </div>
        </form>
    </div>
  )
}

export default SearchBox