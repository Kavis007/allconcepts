import React, { useState } from 'react'

function Countofstring() {
    let[str1,setStr1]=useState()
    let[b,setB]=useState()
    let[res,setRes]=useState()
    let[count,setCount]=useState(0)
    function Countfn(){
        let ct=0
        for(let i=0;i<str1.length;i++)
        {
            if(str1.charAt(i)===b)
            {
                ct++
            }
        }
        setCount(ct)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setStr1(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}/>
      <br/>
      <button onClick={Countfn}>Click</button>
      <h3>{count}</h3>
    </div>
  )
}

export default Countofstring
