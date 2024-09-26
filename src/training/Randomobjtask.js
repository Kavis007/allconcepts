import React, { useState } from 'react'

function Randomobjtask() {
    let a=1
    let b=10
    let [c,setC]=useState()

    console.log(Math.ceil(Math.random()*60))
  return (
    <div style={{backgroundColor:'rgb(123,111,125)',height:"100px", width:"100px"}} >
      
    </div>
  )
}

export default Randomobjtask
