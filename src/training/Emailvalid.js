import React, { useState } from 'react'

function Emailvalid() {
    let[a,setA]=useState()
    let[b,setB]=useState()
   function Validd(){
    let c1=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    // let c3=/\d/
    // let c2=/@gmail.com/
    if(c1.test(a))
    {
        setB("Valid email adress")
    }
    else
    {
       setB("Not a valid email address")
    }
   }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Validd}>Click</button>
      <h3>{b}</h3>
    </div>
  )
}

export default Emailvalid
