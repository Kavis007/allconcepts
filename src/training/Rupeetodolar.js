import React, { useEffect, useState } from 'react'

function Rupeetodolar() {
    let[a,setA]=useState()
    let[op,setOp]=useState()
    useEffect(()=>{
        setTimeout(()=>{setOp(a/84.04)},1000)
    })
        let varr=`the ${a} rupee is ${op} dollars`
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(Number((e.target.value)))}}/>
      <h3>{varr}</h3>
    </div>
  )
}

export default Rupeetodolar
