import React, { useState } from 'react'

function Winlose() {
   let[a,setA]=useState()
   let[c,setC]=useState()
   let[b,setB]=useState(Math.ceil(Math.random()*10))
   let[d,setD]=useState(0)
   let count=0
   console.log(b)
   function Losefn(){
    if(a===b)
    {
      setC(`${d} attempts to win`);
      
    }
    else if(a<b)
    {
      setC("your guess is low")
      setD(d+1)
      
    }
    else
    {
      setC("your guess is high")
      setD(d+1)
    
    }
    console.log({d})
   }
  
  return (
    <div>
        <input type='text' onChange={(e)=>{ setA(Number((e.target.value)))}}></input>
        <button onClick={Losefn}>click</button>
        <h2>{c}</h2>
    </div>
  )
}

export default Winlose
