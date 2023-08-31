import React from 'react'
import { Link } from 'react-router-dom'

const Headr = () => {
  return (
    <div className='header'>
    <Link to='/'>
        <img  className='logo' src={require('../images/logo.jpg')} alt=''/>
    </Link>
    <nav className=''>
      <ul>
          <li>HOme</li>
          <li>HOme</li>
          <li>HOme</li>
      </ul>
    </nav>
    </div>
  )
}

export default Headr