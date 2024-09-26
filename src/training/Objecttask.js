import React, { useState } from 'react'

function Objecttask() {
    let[a,setA]=useState()
    let[b,setb]=useState()
    let[c,setC]=useState()
    let[d,setD]=useState()
    function Ondo(){
        setC(a.toFixed(b))
        setD((a.toPrecision(b)))
    }
    
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(Number(e.target.value))}}/>
      <input type='text' onChange={(e)=>{setb(Number(e.target.value))}}/>
      <button onClick={Ondo}>click</button>
      <h3>{c}</h3>
      <h3>{d}</h3>
    </div>
  )
}

export default Objecttask
