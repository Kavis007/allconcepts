import React, { useState } from 'react'

function Longestword() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    function Samefun(){
        let st1=a.split(" ")
        let max=0,st2=''
        for(let i=0;i<st1.length;i++)
        {
            let temp=st1[i]
            if(max<temp.length)
            {
                max=temp.length
                st2=temp
            }
        }
        setB(st2)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Samefun}>Click</button>
      <h3>{b}</h3>
    </div>
  )
}

export default Longestword
