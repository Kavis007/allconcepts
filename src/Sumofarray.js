import React, { useState } from 'react'

function Sumofarray() {
    let ar=[1,2,6,9,8]
    let[op,setOp]=useState()
    let sum=0
    function But(){
    
     sum=0
    for(let i of ar){
      sum=sum+i
    }
    setOp(Number(sum))
}
function But2(){
    let avg=0,sum=0;
    for(let i of ar){
        sum=sum+i
      }
      avg=sum/ar.length
      setOp(Number(avg))

}

  return (
    <div>
        <button onClick={But}>Getsum</button>
        <button onClick={But2}>Get avg</button>
        <h1>{op}</h1>

    </div>
  )
}

export default Sumofarray
