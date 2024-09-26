import React, { useState } from 'react'

function Multistateprac() {
   let[a,setA]=useState({
    name:'',
    age:'',
    dept:''
   })
  function Samefn(e)
  {
    setA({...a,[e.target.name]:e.target.value})
  }
  function Dispfun(){{
    console.log(a)
  }}
  return (
    <div>
      <input type="text" name="name" onChange={Samefn}/>
      <input type="text" name="age"onChange={Samefn}/>
      <input type="text" name="dept"onChange={Samefn}/>
      <button onClick={Dispfun}>click</button>
    </div>
  )
}

export default Multistateprac
