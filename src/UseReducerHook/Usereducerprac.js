// import React, { useReducer, useState } from 'react'
// const initialvalue={count:0}
// const reducer=(state,dispatch)=>{
//     switch(dispatch){
//         case 'inc':
//             return {count:state.count+1}
//         case 'dec':
//             return{count:state.count-1}
//         case'reset':
//            return {count:0}
//         default:
//             return{count:0}

//     }
// }

// const Usereducerprac = () => {
    
//     const[state,dispatch]=useReducer(reducer,initialvalue)
//     const[a1,setA1]=useState()
//   return (
//     <div>
//       <button onClick={()=>dispatch("inc")}>Add</button>
//       <button onClick={()=>dispatch("dec")}>sub</button>
//       <button onClick={()=>dispatch("reset")}>reset</button>
//       <input type='text' onChange={(e)=>{setA1(e.target.value)}}/>
//       <h3>{state.count}</h3>
//     </div>
//   )
// }

// export default Usereducerprac

import React, { useReducer } from 'react'
const initialvalue={count:0}
const reducer=(a,dispatch)=>{
   switch(dispatch)
   {
    case 'inc':
      return{count:a.count+1}
    case 'dec':
      return{count:a.count-1}
    case 'Res':
      return{count:0}
    default:
      return{count:0}
   }
}

const Usereducerprac = () => {

  const[a,dispatch]=useReducer(reducer,initialvalue)

  return (
    <div>
      <button onClick={()=>dispatch("inc")}>Add</button>
      <button onClick={()=>dispatch("dec")}>sub</button>
      <button onClick={()=>dispatch("res")}>Reset</button>
      <h1>{a.count}</h1>
    </div>
  )
}

export default Usereducerprac