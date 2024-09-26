import React, { useContext } from 'react'
import { Mycon } from './Contextt'

const Page1 = () => {
    const{count1,setCount1}=useContext(Mycon)
    function Samefn(){
        setCount1(count1+1)
    }
  return (
    <div>
        <p>{count1}</p>
      <button onClick={Samefn}>Add</button>
      
    </div>
  )
}

export default Page1
