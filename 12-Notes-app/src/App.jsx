import React, {useState} from 'react'

const App = () => {


  const [note, setNote] = useState("")

  const [notes, setNotes] = useState("")

  const [task, setTask] = useState([])
  


  const submitHandler =(aj)=>{
    aj.preventDefault()

  const newTask = [...task];
  newTask.push({note, notes})
  setTask(newTask)
  console.log(newTask)

    setNote("")
    setNotes("")
  
  }






  return (

    <div className="h-screen lg:flex bg-black text-white ">

      <form onSubmit={(aj)=>
      submitHandler(aj)
      } 
      className="flex gap-4 lg:w-1/2 flex-col items-start  p-10">

        <h1 className="text-3xl font-bold  ">Add Notes</h1>

        <input
        type="text"
        placeholder="Add a new note..."
        value={note}
        onChange={(aj) => setNote(aj.target.value)}
        className="px-5 w-full  py2 border-2 rounded outline-none"
        />

        <textarea
        type="text"
        className="px-5 w-full h-32 items-start flex-row py2 border-2 outline-none rounded"
        placeholder="Enter your details..."
        value={notes}
        onChange={(aj) => setNotes(aj.target.value)}
        />

        <button className="bg-blue-600 active:bg-gray-700 outline-none w-full  text-white px-5 py-2 rounded">Add Note</button>
      
      

      </form>
      <div className=' lg:w-1/2 lg:border-l-2 bg-gray-900  p-10'>

      <h1 className="text-3xl font-bold  ">Recent Notes</h1>

      <div className="flex gap-4 flex-wrap mt-5 items-start justify-start overflow-auto h-full">
       
       {task.map(function(elem,idx){

        return  <div key={idx} className="h-52 w-40 rounded-2xl text-black p-4 bg-white">
        <h3 className="leading-tight text-xl font-bold">{elem.note}</h3>
        <p className="mt-2 leading-tight font-medium text-gray-500">{elem.notes}</p>
        </div>
       })}
        
      </div>

      </div>
    </div>
  )
}

export default App
