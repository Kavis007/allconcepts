import React, { useState } from 'react'

function Mobilenumval() {
    let[a,setA]=useState()
    let[b,setB]=useState()
   function Phonenum(){
    let c1=/\d{3}-\d{3}-\d{4}/
    let str=a.replace(/^(\d{3})(\d{3})(\d{4})$/,`$1-$2-$3`)
    setB(str)


   }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Phonenum}>Click</button>
      <h3>{b}</h3>
    </div>
  )
}

export default Mobilenumval
