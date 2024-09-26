import React, { useState } from 'react'

function NewForm() {

    let[a,setA]=useState()
    let[b,setB]=useState()
    let[c,setC]=useState(false)
     
      function Reload(e){
        e.preventDefault();
        console.log(a,b,c)
      }
  return (
    <div>
      <form onSubmit={Reload}>
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" placeholder="enter your name" onChange={(e)=>{setA(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td>Dept:</td>
                <td><input type="text" placeholder="Enter your dept"></input></td>
            </tr>
            <tr>
                <td>Course select:</td>
                <td>
                    <select onChange={(e)=>{setB(e.target.value)}}>
                        <option>Cloud Computing</option>
                        <option>Data science</option>
                        <option>AI machine learning</option>
                        <option>Mern stack</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td><input type="radio" value="male" checked={b=="male"} onChange={(e)=>{setB(e.target.value)}}></input>
                <label>Male</label></td>
                <td><input type="radio" value="female" checked={b=="female"} onChange={(e)=>{setB(e.target.value)}}></input>
                <label>Female</label></td>
            </tr>
            <tr>
                <td><input type="checkbox"  val={c} onChange={()=>{setC(!c)}}></input>
                <label>Remainder me</label></td>
            </tr>
            
            <br/>
            
            <button>Click</button>
        </table>

      </form>
    </div>
  )
}

export default NewForm
