import React, { useState} from 'react'
import Swal from 'sweetalert2'
function Formsinsweetalert() {
    let [a, setA] = useState(
        {name:"",
        Dept:"",
        course:"",
        }
    )
    let [b, setB] = useState({
        gender:""
    })
    let [c, setC] = useState(false)
    let[res,setRes]=useState()
    let[res1,setRes1]=useState()
    
    function sweetalert(e){
        e.preventDefault()
        Swal.fire({
            title: "Do you want to save it",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't Save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //code
                setRes(a)
                setRes1(b)
              Swal.fire("Saved!", "", "info");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "error");
            }
          });
    }

    function Reload(e) {
        e.preventDefault();
        // console.log(a, b, c)
    }
    function Handle(e){
        setA({...a,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form onSubmit={sweetalert}>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" placeholder="enter your name" onChange={Handle}></input></td>
                    </tr>
                    <tr>
                        <td>Dept:</td>
                        <td><input type="text"  name="Dept"placeholder="Enter your dept" onChange={Handle}></input></td>
                    </tr>
                    <tr>
                        <td>Course select:</td>
                        <td>
                            <select name="course" onChange={Handle}>
                                <option>Cloud Computing</option>
                                <option>Data science</option>
                                <option>AI machine learning</option>
                                <option>Mern stack</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td><input type="radio" value="male" gender="gender" checked={b == "male"} onChange={(e) => { setB(e.target.value) }}></input>
                            <label>Male</label></td>
                        <td><input type="radio" value="female" gender="gender" checked={b == "female"} onChange={(e) => { setB(e.target.value) }}></input>
                            <label>Female</label></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" val={c} onChange={() => { setC(!c) }}></input>
                            <label>Remainder me</label></td>
                    </tr>

                    <br />

                    <button >Submit</button>
                </table>

            </form>
            <h3>{res && res.name}</h3>
            <h3>{res && res.Dept}</h3>
            <h3>{res1}</h3>
            <h3>{res && res.course}</h3>
        </div>
    )
}

export default Formsinsweetalert
