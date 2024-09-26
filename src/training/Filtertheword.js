import React, { useState } from 'react'

function Filtertheword() {
    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState()
    function Samefn(){
        let st=a.split(",")
        let s1=''
       let f= st.filter(i => !i.includes("a"))
       console.log(f)
       setB(f)
      let r= f.map(i => i.toUpperCase())
      setC(r.join())
        
      
    //    console.log(s1)
    }
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}/>
      <button onClick={Samefn}>Click</button>
      {b && b.map((i,index)=>(
           <div key={index}>{i.toUpperCase()}</div>
       ))}

       {c}
     </div>
  )

}

export default Filtertheword
