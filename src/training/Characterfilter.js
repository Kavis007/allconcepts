import React, { useState } from 'react'

function Characterfilter() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    function Inpgen(e)
    {
       let small=/^[a-z]+$/
       let capit=/^[A-Z]+$/
       let num=/^\d+$/
       
       let k=e.target.value
       if(small.test(k))
       {
           setB("it is small letters")
       }
       if(capit.test(k))
       {
        setB("It is capital letters")
       }
       if(num.test(k))
       {
        setB("It is number")
       }
    }
  return (
    <div>
      <input type='text' name="inp" value={a} onChange={Inpgen}></input>
      <h3>{b}</h3>
    </div>
  )
}

export default Characterfilter
