import React from 'react'
import './product.css'
const Product = (props) => {
const price =89;

  return (
    <div className='item'>
      <p>productName:{props.title}</p>
      <p>productPrice:{props.price}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Product