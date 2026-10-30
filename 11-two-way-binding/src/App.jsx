import React, { useState } from 'react'

const App = () => {

  
  const [name, setName] = useState('')

  const handleSubmit = (cahaha) => {
    cahaha.preventDefault()
    console.log('Form submitted')
  }

  return (

    <div>
      <form onSubmit={(cahaha) =>{ handleSubmit(cahaha) }}>
        <input type="text" placeholder="Enter your name" 
        value={name} 
        onChange={(e)=>{
        setName(e.target.value, 'Itna Kast Mat Karo.....................')
        }}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
