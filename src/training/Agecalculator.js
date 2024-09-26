import React, { useState } from 'react'

function Agecalculator() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[fin,setFin]=useState()
    function Agefn(){
        let ob=new Date(a)
        let ob1=new Date(b)
        let day=(ob1.getDate()-ob.getDate())
        let mon=(ob1.getMonth()-ob.getMonth())
        let year=(ob1.getFullYear()-ob.getFullYear())
        if(mon<0)
        {
            year--
            mon=12+mon
        }
        if(day<0)
        {
            mon--;
            day=30+day
        }
        setFin(`${year} years ${mon} months ${day}days`)
    }
  return (
    <div>
        <center>
      <h2>Age calculator</h2>
      <br/>
      <label className='one'>Your date of birth:</label>
      <input type='date' onChange={(e)=>{setA(e.target.value)}}/>
      <br/>
      <label className='two'>cuurent date:</label>
      <input type='date' onChange={(e)=>{setB(e.target.value)}}/>
      <br/>
      <button onClick={Agefn}>Click</button>
      <br/>
      <label className='three'>Your age:</label>
      <h3>{fin}</h3>
      </center>
    </div>
  )
}

export default Agecalculator
