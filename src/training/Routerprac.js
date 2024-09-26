import React from 'react'
import { Link } from 'react-router-dom'

function Routerprac() {
    function Letsfn(){
        nav('/Bmifind')
    }
  return (
    <div>
    <Link to='/newform'>
    <button>navigationnnnnn</button>
    </Link>
    <button onClick={Letsfn}>navigationnnnnn</button>
    </div>
  )
}

export default Routerprac
