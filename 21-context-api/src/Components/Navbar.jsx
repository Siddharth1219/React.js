import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <h2>Context API</h2>
      <Navbar2 theme={props.theme} setTheme={props.setTheme} />
    </div>
  )
}

export default Navbar 
