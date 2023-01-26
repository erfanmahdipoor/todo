import React from "react"
import Product from "./components/product/Product"
class App extends React.Component{
render(){
    return( 
    <div>
        <div id="main">hello jsx</div>
        <Product title="book1" price="12"/>
        <Product title="book2" price="22"/>
        <Product title="book3" price="32">discount:20%</Product>
        <Product title="book4" price="42"/>
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