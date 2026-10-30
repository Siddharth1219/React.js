import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState({username: "Rohit", age: 20})      //num for read only, and setnum is write only, useState is a hook which is used to manage state in functional components

  const buttonClicked = ()=>{
    const newState = {...num, age: num.age + 1}   //spread operator is used to copy the existing state and then we can update the specific property we want to change 
    newState.username = "Siddharth"   //updating the username property of the state
    setNum(newState);
  }

  
  return (
    <div>
      <h1>{num.username}, {num.age}</h1>
      <button onClick={buttonClicked}>Maarrroooo Mujhe Maroooo</button>
    </div>
  )
}

export default App
