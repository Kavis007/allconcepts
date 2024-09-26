import React, { useState } from 'react'

function Formvalidation() {
    let[a,setA]=useState({
        Name:"",
        Password:"",
        Mailid:"",
        phonenumber:""
})
   let[b,setB]=useState()
   let[pas,setPas]=useState()
   let[em,setEm]=useState()
   let[ph,setPh]=useState()
let eemail=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
let ppswrd=/^(?=[A-Za-z0-9\W]*).{8,}$/
let phnumber=/^\d{10}$/
function Samefn(e)
{
    setA({...a,[e.target.name]:e.target.value})
}
function handleSubmit(e){
    e.preventDefault()
    if(!a.Name)
    {
        setB("name is required")
    }
    else
    {
       
        setB("")
    }

    if(a.Password==='')
    {
        setPas("password is required")
    }
    else if(!ppswrd.test(a.Password))
    {
        setPas("Invalid password")
    }
    else{
     
        setPas("")
    }
    if(!a.Mailid)
    {
        setEm("email is required")
    }
    else if(!(eemail.test(a.Mailid)))
    {
        setEm("Invalid email id")
    }
    else{
        setEm("")
    }
    if(!a.phonenumber)
    {
         setPh("phone number is required")
    }
    else if(!phnumber.test(a.phonenumber))
    {
        setPh("Invalid ph number")
    }
    else{
        setPh("")
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" name="Name"placeholder="Enter your name" onChange={Samefn}></input></td>
            {b}
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="text" name="Password"placeholder="Enter your password"onChange={Samefn}/></td>
            {pas}
        </tr>
        <tr>
            <td>Mailid:</td>
            
            <td><input type="text" name="Mailid" placeholder="Enter your mail id"onChange={Samefn}/></td>
            {em}
        </tr>
        <tr>
            <td>phonenumber:</td>
            <td><input type="text" name="phonenumber" placeholder="Enter your phonenumber"onChange={Samefn}/></td>
           {ph}
        </tr>
        <button type='submit'>submit</button>
    </table>
    </form>
    {}
    </div>
  )
}

export default Formvalidation
