import React, { useState } from 'react'

function ObjectExample() {
    let details = {
        name:"kavi",
        mail:"Kavi@gmail.com",
        mob:887665554, 
        skills:["HTML","CSS","Java","Javascript"],
        address:{
            dno:8,
            area:"cbe"
        }
    }

    let [address, setAddress] = useState({
        dno:"",
        stname:""

    })

    let detailss= {
        username:"",
        address:address
    }

    let obj = new Object()
    obj.name= "name"
    obj.value= 45
    console.log(obj)
    
  return (
    <div>
      {details.mail}
      <br />
      {details.address.dno}
      <br />
      {details.skills}
    </div>
  )
}
{/* <input type='text' onChange={(e)=>{setValue(e.target.value)}}></input> */}

export default ObjectExample
