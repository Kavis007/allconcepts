import React from "react";

function IfElse(){
    let a=10
    let b=20
    let c
    if(a>b){
        c="a is big"
    }
    else{
        c="b is big"
    }
    return(
        <div>
        <h1> a is{a}</h1>
            <h1> b is {b}</h1>
            <h1>result: {c}</h1>

        </div>
    )
}

export default IfElse