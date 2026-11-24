import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

    useEffect(function() {
        console.log('useEffect called');
    },[num2])   // this useEffect will be called only when num2 changes

  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }}
      
      onDoubleClick={()=>{
        setNum2(num2 + 10)
      }}>click Here</button>
    </div>
  )
}

export default App
