
import React from 'react'


const Navbar = (props) => {



  return (
    <div>
        <p>Current Theme: {props.theme}</p>
      <button onClick={props.onThemeChange}>Change Theme</button>
    </div>
  )
}

export default Navbar
