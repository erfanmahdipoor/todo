import React from 'react'
import './product.css'
const Product = (props) => {
const price =89;

  return (
    <div className='item'>
      <p>productName:{props.title}</p>
      <p onclick ={props.click}>productPrice:{props.price}</p>
     <input type="text" onChange={props.change} />
      <p>{props.children}</p>
    </div>
  )
}

export default Product