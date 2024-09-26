import React, { useState } from 'react'

function Rgbrandom() {

    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
        function Rgcolor(){
    setA(Math.ceil(Math.random()*120))
    setB(Math.ceil(Math.random()*120))
    setC(Math.ceil(Math.random()*120))
        }
        console.log(`hello ${a} ghgh`)  // template litrals
        console.log(b)
        console.log(c)
  return (
    <>
        
        <div style={{backgroundColor:`rgb(${a},${b},${c})`,height:"800px",width:"1000px"}}>
            
        </div>
        <button onClick={Rgcolor}>Click</button>
    </>
  )
}

export default Rgbrandom
