import React from "react"
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

    render(){
    return( 
    <div>
        <div id="main">hello jsx</div>
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
        <button>change price</button>
    </div>

    )
}



}






// const App=()=>{ return(
//     <div>

// <div id="main">hello jsx</div>
// <Product/>

//     </div>
// )

// }
export default App