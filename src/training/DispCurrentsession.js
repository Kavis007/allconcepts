import React, { useState } from 'react'

function DispCurrentsession() {

    let[a,setA]=useState()
    let[b,setB]=useState()
    function Saamefn(){
      let m=new Date()
      let k=m.getHours();
    //   let j=k.getHours()
      if(k>=1 && k<=5)
      {
        setB("midnight session")
      }
      else if(k>5 && k<=7)
      {
        setB("early morning session")
      }
      else if(k<7 && k<=10){
        setB("morning session")
      }
      else if(k>10 && k<=12)
      {
        setB("forenoon session")
      }
      else if(k>=13 && k<=15)
      {
        setB("afternoon session")
      }
      else if(k>15 && k<=18)
      {
        setB("evening session")
      }
      else if(k>=18){
        setB("night session")
      }
            
    }
  return (
    <div>
      <br/>
      <button onClick={Saamefn}>Click</button>
      <h3>{b}</h3>
    </div>
  )
}

export default DispCurrentsession
