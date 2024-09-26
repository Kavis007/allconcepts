import React, { useState } from 'react'

function Formsinhmtl() {
  let [selectvalue, setSelectvalue] = useState()
  let [radioValue, setRadioValue] = useState()
  let [checkbox, setCheckbox] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    console.log(selectvalue,radioValue, checkbox)

  }
    
  return (
    <div>
         <form onSubmit={handleSubmit}>
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" placeholder="Enter your name"></input></td>
        </tr>
        <tr>
            <td>Dept:</td>
            <td><input type="text" placeholder="Enter your department"/></td>
        </tr>
        <tr>
            <td>Course:</td>
            <td>
                <select onChange={(e)=>{setSelectvalue(e.target.value)}}>
                    <option>MERN stack</option>
                    <option>Mobile application development</option>
                    <option>Cloud computing</option>
                    <option>UI/Ux designer</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td><input type="radio" value="male" checked={radioValue=="male"} name="Gender" onChange={(e)=>{setRadioValue(e.target.value)}}></input>
            <label>male</label>
            </td>
            <td><input type="radio" value="female" name="Gender" checked={radioValue=="female"} onChange={(e) => {setRadioValue(e.target.value)}}></input>
            <label>Female</label>
            </td>
        </tr>
        <input type='checkbox' vakue={checkbox} onChange={() => setCheckbox(!checkbox)}/>
        <label>remember me</label>
        <br />
        <button type='submit'>submit</button>
    </table>
    </form>
    </div>
  )
}

export default Formsinhmtl
