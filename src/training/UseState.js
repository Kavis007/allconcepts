import React, { useState } from "react";
function UseState(){
    let [input, setInput] = useState(6)
    let [input1, setInput1] = useState()
    let [output, setOutput] = useState()

function handleChange(event){
    setInput(Number(event.target.value))


}

function handleinputChange(event){
    setInput1(Number(event.target.value))


}
function handleclick(){
    setOutput(input+input1)
}

    return(
        <div>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleinputChange} />
            <button onClick={handleclick} >click</button>
            
            {input}
            <br />
            {input1}
            <br />
            <h1>{output}</h1>
            
        </div>
    )
}

export default UseState