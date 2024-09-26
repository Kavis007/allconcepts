import React, { useState } from 'react'

function Dateobprac() {
    let datt=new Date()
    let[a,setA]=useState()
    let[b,setB]=useState()
    let ar=[]

    function Samefn(){
        let k=new Date(a)
    //    ar.push(k.toDateString())
    //    ar.push(k.toTimeString())
      setB(k)
    }
  return (
    <div>
      {datt.toDateString()}
      <br/>
      {datt.toTimeString()}
      <input type='datetime-local' onChange={(e)=>{setA(e.target.value)}}/>
      <br/>
      <button onClick={Samefn}>Click</button>
      <h3>{b && b.toTimeString()}</h3>
      <h4>Currentdate</h4>
      <h3>{b && b.toDateString()}</h3>
    </div>
  )
}

export default Dateobprac
