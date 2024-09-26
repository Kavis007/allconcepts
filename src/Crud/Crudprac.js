import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
const data=[
    {id:'1',title:'kai',field:'emnginerr'},
    {id:'2',title:'kijh',field:'doctor'},
];

const Crudprac = () => {
   const[formdata,setFormdata]=useState({
    id:'',
    title:'',
    field:'',
   });
   const[update,setUpdate]=useState('false');
   const[record,setRecord]=useState([])

   useEffect(()=>{
    setRecord(data);
   },[]);

   const handleedit=(row)=>{
       setUpdate(true);
       setFormdata({
        id:row.id,
        title:row.title,
        field:row.field,
       })
   }
   const handledelete=(row)=>{
    setRecord((prev)=>prev.filter((item)=>item.id!=row.id
)
)
   }
   const handlesubmit=(e)=>{
    e.preventDefault();
    if(update)
    {
       
     setRecord((prev)=>prev.map((data)=>data.id===formdata.id?{...data,formdata}:data
    )
    );
       setFormdata({
        id:'',
        title:'',
        field:''
       })
    //    setUpdate(false);
    }
    else
    {
      setRecord((prev)=>[...prev,formdata]
      
    )
    setFormdata({
        id:'',
        title:'',
        field:'',
    })
       
    }
   
   }

    const handlechange=(e)=>{
       setFormdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value,
       }));
    }
    const columns=[
        {
            name:"ID",
            selector:row=>row.id
        },
        {
            name:"TITLE",
            selector:row=>row.title
        },
        {
            name:"FIELD",
            selector:row=>row.field
        },
        {
            name:"Actions",
            cell:(row)=>(
                <>
                <Button onClick={()=>handleedit(row)}>Edit</Button>
                <Button onClick={()=>handledelete(row)}>delete</Button>
                </>
            )
        }
    ]
  return (
    <div>
      <label>ID</label>
      <input type='text' name='id'  value={formdata.id} onChange={handlechange}></input>
      <label>TITLE</label>
      <input type='text' name='title' value={formdata.title} onChange={handlechange}></input>
      <label>FIELD</label>
      <input type='text' name='field'value={formdata.field} onChange={handlechange}></input>
      <Button onClick={handlesubmit}>Submit</Button>
      <DataTable
        data={record}
        columns={columns}
      />
    </div>
  )
}

export default Crudprac
