import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/section2'

const App = () => {

  const users=[
    {
      img:"https://i.pinimg.com/736x/72/c7/b0/72c7b088b0e1a8c75f4c131e439fea9d.jpg",
      intro:"Focused on achieving goals and delivering quality work.",
      tag:"Satisfied"
    },
    {
      img:"https://i.pinimg.com/736x/14/e9/29/14e92951c45050fcffa0944bdaaed91b.jpg",
      intro:"Skilled in teamwork, collaboration, and professional communication.",
      tag:"UnderServed"
    },
    {
      img:"https://i.pinimg.com/736x/e9/cc/2e/e9cc2ee00b008620b9c638b6704d8b60.jpg",
      intro:"Able to analyze challenges and develop effective solutions.",
      tag:"Underbanked"
    },
    {
      img:"https://i.pinimg.com/736x/11/fb/f7/11fbf7522956b3af854800d61dc73b0f.jpg",
      intro:"Capable of prioritizing tasks and meeting deadlines efficiently.",
      tag:"Fixed"
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
