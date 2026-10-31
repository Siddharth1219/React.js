import React from 'react'

const App = () => {

  const submitHandler =(ajaaja)=>{
    ajaaja.preventDefault()
    console.log("Form Submit")
  }

  return (

    <div className="h-screen bg-black text-white">
      <form onSubmit={(ajaaja)=>
      submitHandler(ajaaja)
      }
      className="flex gap-4 justify-between flex-col items-start  p-10">
        <input
        type="text"
        placeholder="Add a new note..."
        className="px-5 w-full  py2 border-2 rounded outline-none"
        />
        <textarea
        type="text"
        className="px-5 w-full h-32 items-start flex-row py2 border-2 outline-none rounded"
        placeholder="Enter your details..."
        />
        <button className="bg-blue-600 outline-none  w-full text-white px-5 py-2 rounded">Add Note</button>
      <img src="https://i.pinimg.com/1200x/0a/cc/03/0acc032b7a5f846f59b59ab8146cfa11.jpg" alt="note"
      className="h-60"/>
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default App
