import React, { useState } from 'react'

function Replacetask() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let[res,setRes]=useState()
    function Replace(){
        
       setRes(a.replace(b,c))
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setC(e.target.value)}}/>
      <button onClick={Replace}>click</button>
      <h2>{res}</h2>
    </div>
  )
}

export default Replacetask
