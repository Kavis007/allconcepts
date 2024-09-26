// import React, { useEffect, useState } from 'react'

//  const Useeffectexam=()=>{
//    const[count,setCount]=useState(100)
//    useEffect(
//     ()=>{setTimeout(()=>{setCount((count)=>count-1)},1000)}
    
//     ,[count])
 
//   return (
//     <div>
//       so it is {count}
//     </div>
//   )
//  }

// export default Useeffectexam

import React, { useEffect, useState } from 'react'

 const Useeffectexam=()=>{
   const[count,setCount]=useState(100)
   useEffect(
    ()=>{setTimeout(()=>{setCount((count)=>count-1)})}
,
[]
)
 
  return (
    <div>
      so it is {count}
    </div>
  )
 }

export default Useeffectexam
