import React from "react";

function Basic(){
    let a=78
    let studentName = "kavi"
    let value = true



    return(
        <div>
            <h1>Basics of React</h1>
            {a}
            <br />
            {studentName}
            {value.toString()}
            
        </div>
    )
}

export default Basic