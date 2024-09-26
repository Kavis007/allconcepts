import React, { useState } from 'react'

function Multistatepract2() {
   let[a,setA]=useState({
    name:'',
    rolno:'',
    dept:'',
    email:''
    
   }
   )
   function Samefn(e){
    setA({...a,[e.target.varri]:e.target.value})
   }
    function Disp(){
        console.log(a)
    }
         
    
  return (
    <div>
     <input type='text' varri='name' onChange={Samefn}/>
     <input type='text' varri='rolno'onChange={Samefn}/>
     <input type='text' varri='dept' onChange={Samefn}/>
     <input type='text' varri='email' onChange={Samefn}/>
     <button onClick={Disp}>Click</button>
    </div>
  )
}

export default Multistatepract2
