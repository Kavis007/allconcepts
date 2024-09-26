import React, { useEffect, useState } from 'react'

function Useeffecttask() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    const[res,setRes]=useState(0)
    let aa=new Date()
        let bb=new Date(b)
        let a1=aa.getTime()
        console.log("bb",bb);
        console.log("a1",a1);
        let a2=bb.getTime()
        console.log("a2",a2)
        let diff=Math.round(a2-a1)/1000
        console.log(diff)


    useEffect(
        ()=>{setTimeout(
            ()=>{setRes((diff)=>diff-1);}
            ,1000
        )}
        
        ,
        [res])
        
    
    
        


    
  return (
    <div>
      <input type="datetime-local" onChange={(e)=>{setB (e.target.value)}}></input>
       <h3>{Math.floor(diff)}</h3>
    </div>
  )
}

export default Useeffecttask
