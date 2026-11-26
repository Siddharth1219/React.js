import React from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Product from './pages/Product.jsx'
import Mens from './pages/mens.jsx'
import Womens from './pages/Womens.jsx'
import Kids from './pages/Kids.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from 'react-router-dom'
import CourseDetails from './CourseDetails.jsx'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/mens' element={<Mens />} />
        <Route path='/product/womens' element={<Womens />} />
        <Route path='/product/kids' element={<Kids />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses/:id' element={<CourseDetails/>} />
      </Routes>
      <Footer />
    
      
    </div>
  )
}

export default App
