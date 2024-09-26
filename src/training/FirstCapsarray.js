import React, { useState } from 'react'

function FirstCapsarray() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    function Casecon(){
        let s3='',ss2,ss1
        let s1=a.split(" ")
        for(let k=0;k<s1.length;k++)
        {
            let s2=s1.at(k)


            for(let j=0;j<s2.length;j++)
            {
                if(j===0)
                {
                    ss1=s2.at(j)
                    ss2=ss1.toUpperCase()
                    s3+=ss2
                }
                else
                {
                    ss1=s2.at(j)
                    s3+=ss1
                }
            }
            setB(s3)

        }
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Casecon}>Click</button>
      <h2>{b}</h2>
    </div>
  )
}

export default FirstCapsarray
