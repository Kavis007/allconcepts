import React, { createContext, useState } from 'react'


const Mycon = createContext();

export { Mycon }

const Mysample = ({children}) => {

    let[count1,setCount1]=useState(0)
    
  return (
    <Mycon.Provider value={{count1,setCount1}}>
        {children}
    </Mycon.Provider>
  )
}

export { Mysample } 
