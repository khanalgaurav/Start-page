import React, { useState } from 'react'

const DateAndTime = () => {
    let myDate =  new Date().toDateString()
    const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString())
    setInterval(() => {
        let myTime = new Date().toLocaleTimeString()
        setCurrentTime(myTime)
    },1000);
  return (
    <div className='flex justify-center gap-28'>
        <div>
            <p className='text-center text-2xl underline'>Date</p>
            <p className='text-center text-4xl font-bold'>{myDate}</p>
            
        </div>
        <div>
            <p className='text-center text-2xl underline'>Time</p>
            <p className='text-center text-4xl font-bold'>{currentTime}</p>

        </div>
    </div>
  )
}

export default DateAndTime