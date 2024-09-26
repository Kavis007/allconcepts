import React, { useState } from 'react'

function LengthofArr() {
    let ar=["apple","grapes","bannana"]
    let[op,setOp]=useState()
    let[fin,setFin]=useState()
    let temp=[];
    let str=''
    function Fruitc(){
    for(let i=0;i<ar.length;i++)
    {
       
      //  setOp(ar[i].length)
        temp.push(ar[i].length)
    }
    setFin(temp)
}

  return (
    <div>
       <button onClick={Fruitc}>COUNT</button>
       <h1>{fin}</h1>
    </div>
  )
}

export default LengthofArr
