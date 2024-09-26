import React, { useState } from 'react'

function MultiStateForm() {
    let [formData, setFormData] = useState({
        username:"",
        age:"",
        mail:""
    })

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleClick(){
        console.log(formData)
    }
  return (
    <div>
      <input type='text' name='username' onChange={handleChange}/>
      <input type='text' name='age' onChange={handleChange}/>
      <input type='text' name='mail' onChange={handleChange}/>
      <button onClick={handleClick} >submit</button>
    </div>
  )
}

export default MultiStateForm
