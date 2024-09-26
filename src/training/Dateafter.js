import React, { useState } from 'react'

function Dateafter() {
    let[a1,setA1]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    let[fin,setFin]=useState()
    function Samefn(){
        let ob=new Date(a1)
        
        let ob1=ob.getTime()
        let one=86400000*b
        setC(ob1+one)
        let ob2=new Date(c)
        setFin(ob2)
       
    }
    function Samefn2(){
        let ob=new Date(a1)
        
        let ob1=ob.getTime()
        let one=86400000*b
        setC(ob1-one)
        let ob2=new Date(c)
        setFin(ob2)
    }
  return (
    <div>
      <input type='date' onChange={(e)=>{setA1(e.target.value)}}/>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}/>
      <button onClick={Samefn}>make plus</button>
      <button onClick={Samefn2}>make a minus</button>
      <h3>{fin && fin.toDateString()}</h3>
    </div>
  )
}

export default Dateafter
