import React, { useState } from 'react'

function DateObj() {
    let [date, setDate] = useState()
    let currentDate = new Date()
    console.log(currentDate)
    console.log(currentDate.getDate())
    console.log(currentDate.getDay());
    console.log(currentDate.getFullYear())
    console.log(currentDate.getHours())
    console.log(currentDate.getTime())
    console.log(currentDate.getMonth())
    console.log(typeof(date))
    let d= new Date(date)
    console.log(d)

    currentDate.setDate(26)
    console.log(currentDate)

    function handleClick(){

    }
  return (
    <div>
      {currentDate.toDateString()}
      <br />
      {currentDate.toTimeString()}
      <input type='date' onChange={(e)=>{setDate(e.target.value)}} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default DateObj
