import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const customStyles = {
    rows: {
      style: {
        backgroundColor: 'green', // Apply background color to rows
      },
    },
    header: {
      style: {
        backgroundColor: '#ccc', // Apply background color to header
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold', // Make header cells bold
      },
    },
  };

const column =[
    {
      name:"ID",
      selector: row=>row.id,

    },
    {
        name:"Title",
        selector: row=>row.title
      },
      {
        name:"stock",
        selector:row=>row.stock
      },
]
const Datatable = () => {

    let[b,setB]=useState([])

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(result =>result.json())
    //     .then((save)=>{setB(save.products)})
    // },[b])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://dummyjson.com/products');
            setB(response.data.products);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [])

  return (
    <div>
     
      <div>
        <DataTable
        columns={column}
        data={b}
        pagination
        customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default Datatable
