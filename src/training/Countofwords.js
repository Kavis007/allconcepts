import React, { useState } from 'react'

function Countofwords() {
    let[a,setA]=useState()
    let[c,setC]=useState()
    function Splitcnt(){
        let arr=[]
        let str1=""
        str1=a.split(" ")
        for(let i=0;i<str1.length;i++)
        {
            arr.push(str1.valueOf(i));
        }
        setC(arr.length)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Splitcnt}>Click</button>
      <h2>{c}</h2>
    </div>
  )
}

export default Countofwords
