import React, { useEffect, useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Useeffectapitask=()=>{
    let[inp1,setInp1]=useState([])
    let[inp2,setInp2]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(temp1=>temp1.json())
        .then(save=>{
            const res = save.products.map((tem)=>tem.reviews)
            setInp1(res)
    })
    },[inp2])
console.log("inp1",inp1)
  return (
    <div>
      <input type='text' onChange={(e)=>{setInp2(e.target.value)}}/>
      {/* <div className='outer_div'>
      {inp1.map((temp2,index)=>(
        <Card style={{width:"100px",marginBottom:"10px",marginRight:"10px",paddingLeft:"10px"}}key={index}>{temp2.category}</Card>
      ))}
      </div> */}
       <Row >
      {inp1.map((temp2,index)=>(
        <Col xs={12}md={3}>
                <Card style={{width:"100px"}}key={index}>{temp2.map((temp3,index)=>(
                  <div key={index}>{temp3.date}</div>  
                ))}</Card>

        </Col>
      ))}
      </Row>
      
    </div>
  )
}

export default Useeffectapitask
