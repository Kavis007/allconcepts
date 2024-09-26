import React, { useState } from 'react'

function Titlecaseconversion() {
    let[a,setA]=useState()
    let[res,setRes]=useState()
    function CaseConfn(){
        let s2=""
        for(let i=0;i<a.length;i++)
        {
            if(i===0)
            {
                let s1=""
                
                s1=a.charAt(i)
                let s3=s1.toUpperCase()
                s2+=s3;
                
            }
            else
            {
                s2+=a.charAt(i)
            }
        }
        setRes(s2)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <br></br>
      <button onClick={CaseConfn}>Click</button>
      <h3>{res}</h3>
    </div>
  )
}

export default Titlecaseconversion
