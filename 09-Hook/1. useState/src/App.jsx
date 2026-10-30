import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(20)      //num for read only, and setnum is write only, useState is a hook which is used to manage state in functional components

  function increaseNum(){
    console.log("Increase Num");
    setNum(num + 1);
  }
  function decreaseNum(){
    console.log("Decrease Num");
    setNum(num - 1);

  }

  return (


    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase Here</button>
      <button onClick={decreaseNum}>Decrease Here</button>

    </div>
  )
}

export default App
