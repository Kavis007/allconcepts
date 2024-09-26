import React, { useContext } from 'react'
import { Mycon } from './Contextt'

const Page3 = () => {
    const{count1,setCount1}=useContext(Mycon)
    function Samefn3(){
        setCount1(0)
    }
  return (
    <div>
      <button onClick={Samefn3}>reset</button>
    </div>
  )
}

export default Page3
