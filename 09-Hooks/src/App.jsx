import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Button Clicked");
  }


  return (


    <div>
      <button onClick={btnClicked}>Click Me</button>
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
