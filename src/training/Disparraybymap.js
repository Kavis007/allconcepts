import React, { useState } from 'react'

function Disparraybymap() {
    let[inp,setInp]=useState()
    let[out,setOut]=useState()
    let ar1=[]
    let ar
    function Buttfn(){
    ar=inp.split(" ")
    setOut(ar)
    
   
}
    
  return (
    <div>
      <input type='text' onChange={(e)=>{setInp(e.target.value)}}/>
      <button onClick={Buttfn}>Click</button>
      {out && out.map((i,index) => (
        <li key={index}>{i}</li>
      )) }
    </div>
  )
}

export default Disparraybymap
