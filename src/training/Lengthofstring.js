import React, { useState } from 'react'

function Lengthofstring() {
    let[str1,setStr1]=useState()
    let[res,setRes]=useState()
    function Lengfn(){
         setRes(str1.length)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setStr1(e.target.value)}}/>
      <br/>
      <button onClick={Lengfn}>click</button>
      <h3>`The ${str1} length is ${res}`</h3>
    </div>
  )
}

export default Lengthofstring
