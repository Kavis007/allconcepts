import React, { createContext, useState } from 'react'

 export const Usecontexttask=createContext();
 
const Sampcont = ({children}) => {
    const[inp1,setInp1]=useState("kavis")
  return (
   
      < Usecontexttask.Provider value={{inp1,setInp1}}>
        {children}
      </ Usecontexttask.Provider>
   
  )
}

export default Sampcont
