import React, { useState } from 'react'
import axios from 'axios'

const App = () => {


  const [userData, setUserData] = useState([]);

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
  setUserData(response.data);
  console.log(response.data);
}


  return (
    <div className= "bg-black text-white h-screen ">
      <button
      onClick={getData}
      className="bg-green-600 active:scale-95  mb-3 px5 py-2 rounded text-white">Get Data</button>
    </div>
  )
}

export default App
