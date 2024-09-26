import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/myContext'
import  { Usecontexttask } from '../Context/Usecontexttask'


const Useeffectwithapi = () => {

// const {name,setName} = useContext(MyContext)
   const{inp1,setInp1}=useContext(Usecontexttask)

    let[a,setA]=useState([])
    let[a1,setA1]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(result =>result.json())
        .then(save =>setA(save))
    },[a1])
  return (
    <div>
      {/* {name} */}
      <p>{inp1}</p>
      <input type='text' onChange={(e)=>setInp1(e.target.value)}/>
      {a.map((temp,index)=>(
        <li key={index}>{temp.title}</li>
      )

      )}
    </div>
  )
}
// useEffect(()=>{},[])

export default Useeffectwithapi
