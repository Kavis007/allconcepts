import React, { useState } from 'react'
import Swal from 'sweetalert2';
function Prompttask() {
    let[a,setA]=useState()
    async function Prrpt(){
    const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Your input",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
            "aria-label": "Type your message here"
        },
        showCancelButton: true
    });
    if (text) {
        Swal.fire(text);
        setA(text)
    }
}
    return (
        <div>
            <center>
            <button onClick={Prrpt}>Click</button>
            <h2>{a}</h2>
            </center>
        </div>
    )
}

export default Prompttask
