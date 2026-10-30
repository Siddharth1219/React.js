import React, {useState} from 'react'

const App = () => {

    const [num, setNum] = useState(20)      //num for read only, and setnum is write only, useState is a hook which is used to manage state in functional components
    const [user, setUser] = useState({name: "Siddharth", age: 30})   //user is an object which is used to store user data, and setUser is a function which is used to update the user data
    return (


    <div>
      <h1>Value of Num is {num}</h1>
      <h1>Value of User is {user.name}</h1>
      <h1>Value of User is {user.age}</h1>
      <button onClick={() => setNum(30)}>Marrr Dalo Mujheeee </button>
      <button onClick={() => setUser({...user, name: "Siddharth Kumar"})}>Change Name</button>
      <button onClick={() => setUser({...user, age: 31})}>Change Age</button>
    </div>
  )
}

export default App


// useState - state ko manage ke liye

// useEffect - side effects handle karne ke liye(jaise API call, DOM manipulation, event listners)

// useContext - global state ko consume karne ke liye without prop drilling

// useReducer - complex state management ke liye(Redux jaisa chhotta version)

// useRef - mutable values hold karne ke liye jo re-render trigger na karein, ya DOM access karna ke liye

// useMemo and useCallback - optimization ke liye, unnecessary re-renders avoid karne ke liye.
