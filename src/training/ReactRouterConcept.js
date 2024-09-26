import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ReactRouterConcept() {

  let navigate = useNavigate()

  let data = 57
  function handleclick(){
    navigate('/oddchecker',{state:data})
  }


    

    

  return (
    <div>
      <h1>reactrouterconcept</h1>
      <Link to='/'>
      <button >click</button>
      </Link>
      <a href='/oddchecker'>link to oddchecker</a>
      <button onClick={handleclick}>click to navigate</button>
    </div>
  )
}

export default ReactRouterConcept
