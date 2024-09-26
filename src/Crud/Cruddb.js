import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const Data = [
  { id: 1, title: "React", category: "frontend" },
  { id: 2, title: "Angular", category: "web" },
  { id: 3, title: "Flutter", category: "mobile" },
  { id: 4, title: "Vue", category: "web" },
  { id: 5, title: "Html", category: "design" },
]

const Cruddb = () => {

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
  })

  const [record,setRecord] = useState([]);

  useEffect(()=>{
      setRecord(Data)
  },[])


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(update){
      setRecord((prev)=>prev.map(
              (data)=>data.id === formData.id ? {...data,...formData}  : data
      ))
      setFormData({
        id: "",
        title: "",
        category: "",
    })
   }
    else{
        setRecord((prev)=>[...prev,formData])
        setFormData({
            id: "",
            title: "",
            category: "",
        })
    }
  }

  const [update,setUpdate] = useState(false)

  const handleEdit=(row)=>{
     setUpdate(true);
     setFormData({
      id: row.id,
      title: row.title,
      category: row.category,
     }) 
  }

  const handleDelete=(row)=>{
    setRecord((prev)=>prev.filter((item)=>item != row))
  }

  const column = [
    {
      name: "ID",
      selector: row => row.id
    },
    {
      name: "TITLE",
      selector: row => row.title
    },
    {
      name: "CATEGORY",
      selector: row => row.category
    },
    {
      name: "Actions",
      cell: ((row) => (
        <>
          <Button onClick={()=>handleEdit(row)}>Edit</Button>
          <Button onClick={()=>handleDelete(row)}>Delete</Button>
        </>
      )
      )
    }

  ]
  return (
    <div>
      <label>ID</label>
      <input type='text' name='id' value={formData.id} onChange={handleChange} />
      <label>TITLE</label>
      <input type='text' name='title' value={formData.title} onChange={handleChange} />
      <label>CATEGORY</label>
      <input type='text' name='category' value={formData.category} onChange={handleChange} />

      <Button onClick={handleSubmit}>Submit</Button>
      <DataTable
        data={record}
        columns={column}
      />
    </div>
  )
}

export default Cruddb
