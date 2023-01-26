import React from "react"
import { useState } from "react"
import './app.css'
import Product from "./components/product/Product"
class App extends React.Component{
state={
    product:[
        {title:"book1", price:12},
        {title:"book2", price:22},
        {title:"book3", price:32},
        {title:"book4", price:42}
    ]
}
    changePriceHandler=()=>{
        console.log("changePrice")
   this.setState(
    {
        product:[
            {title:"book1", price:120},
            {title:"book2", price:220},
            {title:"book3", price:320},
            {title:"book4", price:420}
        ]
    }
   )

    }

    render(){
    return( 
    <div className="center">

        <h1 id="main">book store</h1>
        <Product 
        title={this.state.product[0].title}
        price={this.state.product[0].price}/>
        <Product 
        title={this.state.product[1].title}
        price={this.state.product[1].price}/>
        <Product 
        title={this.state.product[2].title}
        price={this.state.product[2].price}/>
        <Product 
        title={this.state.product[3].title}
        price={this.state.product[3].price}/>
        <button className="btn" onClick={this.changePriceHandler}>change price</button>
    </div>

    )
}



}






// const App=(props)=>{ 
//     const[productSate,setProductState]=useState({
//             product:[
//                 {title:"book1", price:12},
//                 {title:"book2", price:22},
//                 {title:"book3", price:32},
//                 {title:"book4", price:42}
//             ]
//         })
//        const changePriceHandler=()=>{
//                     console.log("changePrice")
//                setProductState(
//                 {
//                     product:[
//                         {title:"book1", price:120},
//                         {title:"book2", price:220},
//                         {title:"book3", price:320},
//                         {title:"book4", price:420}
//                     ]
//                 }
//                )
            
//                 }
//     return( 
//             <div>
//                 <div id="main">hello jsx</div>
//                 <Product 
//                 title={productSate.product[0].title}
//                 price={productSate.product[0].price}/>
//                 <Product 
//                 title={productSate.product[1].title}
//                 price={productSate.product[1].price}/>
//                 <Product 
//                 title={productSate.product[2].title}
//                 price={productSate.product[2].price}/>
//                 <Product 
//                 title={productSate.product[3].title}
//                 price={productSate.product.price}/>
//                 <button onClick={changePriceHandler}>change price</button>
//             </div>
        
//             )
// }
export default App