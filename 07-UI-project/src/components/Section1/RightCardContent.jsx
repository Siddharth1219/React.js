import React from 'react'

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between ">
    <h2 className="bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">1</h2>
    <div>
        <p className="text-xl leading-relaxed  text-white mb-14">A dedicated professional committed to excellence, growth, integrity, and delivering quality results.</p>
        <div className="flex justify-between ">
            <button className="bg-blue-500 text-white font-medium px-8 py2 rounded-full">Satisfied</button>
            <button className="bg-blue-500 text-white font-medium px-4 py2 rounded-full"><i className="ri-arrow-right-line"></i></button>
        </div>
    </div>
    </div>
  )
}

export default RightCardContent
