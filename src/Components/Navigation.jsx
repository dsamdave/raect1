
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>  
        <ul>
            <li><Link to="/" target='_blank'>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link></Link></li> */}
        </ul>
    </div>
  )
}

export default Navigation