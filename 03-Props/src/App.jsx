import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">

{/* props is a way to pass data from a parent component to a child component */}

    <Card  user="Siddharth"  age={22} img="https://tse3.mm.bing.net/th/id/OIP.NNYbhPAoYdsGPGp09Hbf_wHaHa?r=0&pid=Api&h=220&P=0"/>
    <Card user="Sagar" age={30} img="https://tse2.mm.bing.net/th/id/OIP.uzpE3Urvi8aEYcoG69EDpwHaFt?r=0&pid=Api&h=220&P=0" />
    <Card user="Rao" age={25} img="https://tse4.mm.bing.net/th/id/OIP.VNqEdnuMSKukvMQZKMYE2AHaHa?r=0&pid=Api&h=220&P=0"/>
    <Card user="Ritu" age={28} img="https://tse2.mm.bing.net/th/id/OIP.WbUVt1oXW2tvh0at_XPRmQHaE8?r=0&pid=Api&h=220&P=0" />





    </div>
  )
}

export default App
