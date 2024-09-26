import React, { useState } from 'react'
import Propeg4 from './Propeg4'
function Probeg3() {

    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let ll
    function Ondo(){
       ll=a+b
       setC(ll)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(Number(e.target.value))}}></input>
      <input type='text' onChange={(e)=>{setB(Number(e.target.value))}}/>
      <button onClick={Ondo}>Click</button>
      <Propeg4 name={c} std={b}/>
    </div>
  )
}

export default Probeg3
