import React from 'react'
import Swal from 'sweetalert2';

function DialogueBoxes() {
    function sweetalert(){
        Swal.fire({
            title: "Do you want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "delete",
            denyButtonText: `Don't delete`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //code
              Swal.fire("Saved!", "", "info");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "error");
            }
          });
    }
  return (
    <div>
      <button onClick={()=>{window.alert("submited")}}>alert</button>
      <button onClick={()=>{window.confirm("do u want to save?")}}>confirm</button>
      <button onClick={()=>{window.prompt("enter something")}}>prompt</button>
      <button onClick={sweetalert}>sweetalert</button>
    </div>
  )
}

export default DialogueBoxes
// npm i sweetalert2
