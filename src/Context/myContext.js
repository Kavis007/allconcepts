import React, { createContext, useState } from "react";

export const MyContext = createContext();



const MyProvider = ({children}) => {
    const [name,setName]= useState("Ram")
  return (
    <MyContext.Provider value={{name,setName}}>
       {children}
    </MyContext.Provider>
  )
}

export default MyProvider
