import React from 'react'

const App = () => {


  function btnClicked(){
    console.log("Button Clicked");
  }

  function btnDoubleClicked(){
    console.log("Button Doubled Clicked");
  }

  return (
    <div>
      <h1>Hello chinaroooooooo</h1>

      <button onClick={btnClicked}>Change User</button>
      
      <button onDoubleClick={btnDoubleClicked}>Change User Double click</button>

      <button onClick={() => {
        console.log("Button Clicked");
      }}>Change  Main User</button>
    </div>
  )
}

export default App
