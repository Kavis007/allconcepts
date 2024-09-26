import React, { useState } from 'react'
import Propeg2 from './Propeg2'

function Propeg1() {

    let[inp,setInp]=useState()
    let[inp1,setInp1]=useState()
    let[op,SetOp]=useState()
    let a
    // let a
    // let[op,setOp]=useState()
    // function Onsight(){
    //     a=inp+inp1
    //     setOp(Number(a))
        function Dispadd(){
            a=inp+inp1
            SetOp(Number(a))
        }
    
    
  return (
    <div>
       
         <h1>My first eg in props</h1>
          {/* <input type="text" onChange={(e)=>{setInp(Number(e.target.value))}}/>
          <input type="text" onChange={(e)=>{setInp1(Number(e.target.value))}}/>
          <button onClick={Onsight}>click</button>
          <Propeg2 name={op} std={inp1}/>
          <h1>{a}</h1> */}
          <input type='text' onChange={(e)=>{setInp(Number(e.target.value))}}/>
          <input type='text' onChange={(e)=>{setInp1(Number(e.target.value))}}/>
          <button onClick={Dispadd}>Click</button>
          <Propeg2 aa={op} bb={inp1}/>
          <h2>{op}</h2>
    </div>
  )
}

export default Propeg1
