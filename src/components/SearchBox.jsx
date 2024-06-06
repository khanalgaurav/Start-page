import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="my-5">
        <form action="https://www.google.com/search" method="GET">
          <div className="shadow-md shadow-gray-600 text-xl bg-[#d2d2d2] bg-opacity-65 rounded-2xl px-5 mx-[25%] py-2 flex justify-between">
              <input className="bg-transparent focus:outline-none w-full" type="text" name="q" placeholder="Search Box"/>
              <button className="" type="submit" ><FaMagnifyingGlass/></button>
          </div>
        </form>
    </div>
  )
}

export default SearchBox