import React, { useState } from 'react'

function Removeduplicate() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let ar
    function Duplifn(){
        ar=a.split(" ")
        let tr=[]
        ar.forEach(i=> {
            if(!tr.includes(i))
            {
                tr.push(i)
            }
        });
        setB(tr)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Duplifn}>Click</button>
      {b && b.map((i,index)=>(
        <li key={index}>{i}</li>
      ))}
    </div>
  )
}

export default Removeduplicate
