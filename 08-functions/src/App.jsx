import React from 'react'

const App = () => {


  function btnClicked(){
    console.log("Button Clicked");
  }




  function btnDoubleClicked(){
    console.log("Button Doubled Clicked");
  }




  function inputChangeHandler(value){
    console.log(value);
  }
  




  const pageScrolling=(elem)=>{
    if(elem>0){
          console.log("Page Scrolling sidha.....speed of scroll", elem);
    }
    else{
          console.log("Page Scrolling ulta.....speed of scroll", elem);
    }

  }








  return (



  //   <div>
  //     <h1>Hello chinaroooooooo</h1>


  //     <button onClick={btnClicked}>Change User</button>
      

  //     <button onDoubleClick={btnDoubleClicked}>Change User Double click</button>


  //     <button onClick={() => {
  //       console.log("Button Clicked");
  //     }}>Change  Main User</button>
  //   </div>
    






  // <div>
  //   <input onChange={function (elem){
  //     inputChangeHandler(elem.target.value);

  //   }}
  //   type='text'
  //    placeholder='Enter your name'/>
  // </div>






  // <div>
  //   <div
  //   onMouseMove={(elem) => {
  //     console.log(elem)
  //   }}
  //   className='box'>
  //   </div>
  // </div>





  // <div onWheel={(elem) => {
  //   pageScrolling(elem.deltaY);  //deltaY is measured the speed of scrolling in y direction
  // }}>
  //   <div className="page1"></div>
  //   <div className="page2"></div>
  //   <div className="page3"></div>

  // </div>






 
  )
}

export default App
