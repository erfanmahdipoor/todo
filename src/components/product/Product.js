import React from 'react'

const Product = (props) => {
const price =89;

  return (
    <div>
      <p>productName:{props.title}</p>
      <p>productPrice:{props.price}</p>
    </div>
  )
}

export default Product