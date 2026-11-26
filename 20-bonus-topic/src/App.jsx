import React,{useState} from 'react'
import Navbar from './Components/Navbar.jsx'

const App = () => {

      const [theme, setTheme] = useState('Dark')

  return (
    <div>
    
    <h1>Current Theme: {theme}</h1>
      <Navbar theme={theme} onThemeChange={() => setTheme(theme === 'Dark' ? 'Light' : 'Dark')} />

    </div>
  )
}

export default App
