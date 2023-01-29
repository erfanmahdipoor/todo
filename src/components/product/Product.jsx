import React from 'react'
import './product.css'
const Product = (props) => {
const price =89;

  return (
    <div className='item'>
      <p onClick ={props.click}>productName:{props.title}</p>
      <p>productPrice:{props.price}</p>
     <input type="text" onChange={props.change} value={props.title} />
      <p>{props.children}</p>
    </div>
  )
}

export default Product