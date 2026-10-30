import React from 'react'

const App = () => {
  const handleSubmit = (cahaha) => {
    cahaha.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={(cahaha) =>{ handleSubmit(cahaha) }}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
