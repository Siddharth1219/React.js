import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(response.data)
  }





  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   const data = await response.json()
  //   console.log(data)

  //   console.log("Data Aaaaaa Gyaaaa reee BaBABAabABaBAB")
  // }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
