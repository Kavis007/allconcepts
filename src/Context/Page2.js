import React, { useContext } from 'react'
import { Mycon } from './Contextt'

const Page2 = () => {
    const{count1,setCount1}=useContext(Mycon)
    function Samefn2(){
        setCount1(count1-1)
    }
  return (
    <div>

      <button onClick={Samefn2}>sub</button>
    </div>
  )
}

export default Page2
