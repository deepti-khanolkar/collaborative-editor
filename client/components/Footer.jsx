import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <nav>   
        <Link to='/'>Home</Link>
        <a href="/">&copy; Copyright Deepti Khanolkar</a>
      </nav>
    </footer>

  )
}

export default Footer
