import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10' justify-content='center'py-4>
        <Link  to='/product/mens'>Men's Collection</Link>
        <Link  to='/product/womens'>Women's Collection</Link>
        <Link  to='/product/kids'>Kid's Collection</Link>
      </div>
      <h1>Product</h1>
    </div>
  )
}

export default Product
