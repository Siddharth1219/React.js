import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80  rounded-4xl">
    <img className="h-full w-full object-cover" src="https://i.pinimg.com/736x/72/c7/b0/72c7b088b0e1a8c75f4c131e439fea9d.jpg" alt="Error"/>
    
    <RightCardContent />
    </div>
  )
}

export default RightCard
