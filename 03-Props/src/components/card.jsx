import React from 'react'

const card = (props) => {

  console.log(props );
  return (
    <div className="container">
          
            
            
            <h1>{props.user}</h1>
            <p>Age: {props.age}</p>
            <img src={props.img} alt="profile" />



            <p>This a props example topic </p>
            <button>View Profile</button>
          </div>
  )
}

export default card
