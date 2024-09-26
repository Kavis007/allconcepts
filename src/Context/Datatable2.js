import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const colum=[
    {
        name:"id",
        selector:row=>row.id
    },
    {
         name:"description",
         selector:row=>row.description
    },
    {
        name:"stock",
        selector:row=>row.stock
    }

]
const Datatable2 = () => {
    
    let[a,setA]=useState()
    let[b,setB]=useState()
    useEffect(()=>{
        const Fetch1= async()=>{
            const val1= await axios.get('https://dummyjson.com/products')
            setA(val1.data.products)
        }
        Fetch1();
    },[])
  return (
    <div>
      <input type='text' onChange={(e)=>{setA(e.target.value)}}></input>
      <input type='text' onChange={(e)=>{setB(e.target.value)}}></input>
      <DataTable
      columns={colum}
      data={a}
      pagination
      stripped
      selectableRows
      highlightOnHover
      />
    </div>
  )
}

export default Datatable2
