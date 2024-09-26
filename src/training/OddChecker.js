import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function OddChecker(){
    let [input, setInput] = useState()
    let [output, setOutput] = useState()

    let location = useLocation()

    let n= location.state


function handleChange(event){
    setInput(Number(event.target.value))

}

function check(){
    if(input%2==0){
        setOutput(input + " is even")
    }
    else{
        setOutput(input + " is odd")
    }
}
    return(
        <>

            <input type="text" onChange={handleChange} />
            <button onClick={check} >click</button>
            <h1>{output}</h1>
            {n}
        </>
    )
}

export default OddChecker