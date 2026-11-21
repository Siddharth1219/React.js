import React from 'react'

const App = () => {

  // localStorage.clear()            // it is used to clear the local storage data from the browser. It will remove all the key-value pairs stored in the local storage.
  // sessionStorage.clear()

  localStorage.setItem("name", "Siddharth Yadav")      // it is used to store data in the local storage of the browser. It takes two arguments, the first one is the key and the second one is the value. The key is used to identify the data and the value is the data that you want to store. The data is stored in the form of key-value pairs.
  localStorage.setItem("age", "22")
  localStorage.setItem("city", "Sonbhadra, Uttar Pradesh")

  console.log(localStorage.getItem("name"))      // it is used to retrieve data from the local storage of the browser. It takes one argument, the key of the data that you want to retrieve. It returns the value of the data stored in the local storage.

  localStorage.removeItem("age")      // it is used to remove data from the local storage of the browser. It takes one argument, the key of the data that you want to remove. It removes the key-value pair from the local storage.

  return (
    <div>
      App
    </div>
  )
}

export default App
