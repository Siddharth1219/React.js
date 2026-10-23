import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  const user = {
    name: "Siddharth",
    age: 20,
    email: "siddharth.obr@gmail.com"
  }

  return (
    <div>
      <div className="card">
        <h2>My Card</h2>
        <p>This is a simple card component.</p>
      </div>

      <div className="cards">
        <h2>Kya Hal Ba</h2>
        <p>Jinda Hava Ja</p>
      </div>


    <div className="cardd">  
      <Card />
    </div>

      <div className="navbar">
        <Navbar />
      </div>


      <h2>name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
    
  )
}

export default App
