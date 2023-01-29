import React from "react"
import './app.css'
import Product from "./components/product/Product"
class App extends React.Component{
state={
    product:[
        {id:1 ,title:"book1", price:12},
        {id:2 ,title:"book2", price:22},
        {id:3 ,title:"book3", price:32},
        {id:4,title:"book4", price:42}
    ],
    showProduct:false
}
    changePriceHandler=(newTitle)=>{
        console.log("changePrice")
   this.setState(
    {
        product:[
            {title:newTitle, price:120},
            {title:"book2", price:220},
            {title:"book3", price:320},
            {title:"book4", price:420}
        ],
        showProduct:true
    }
   )

    }
 clicked=()=>{
    console.log("clicked");
 }
 deleteProductHandler=(indexProduct)=>{
 const products= [...this.state.product]
//  console.log(products);
// console.log(indexProduct)
 products.splice(indexProduct,1)
 this.setState({product:products})
}

changeTitleHandler=(event,id)=>{
    const productIndeX= this.state.product.findIndex((item)=>{ return item.id===id})
    // console.log(productIndex)
   const product ={
    ...this.state.product[productIndeX]
   }
   product.title=event.target.value
   const products=[...this.state.product]
   products[productIndeX]=product
   this.setState({product:products})

    
} 
toggleProductHandler=()=>{
const show =this.state.showProduct
this.setState({...this.state.product ,showProduct:!show})
}
    render(){
        const btn ={
            backgroundColor:'#7b1fa2',
            color:'#ffffff',
            font:'inherit',
            border:'none'}
        let products= null
        if(this.state.showProduct){
            products=(
                    <div>
                    {/* <Product 
                    title={this.state.product[0].title}
                    price={this.state.product[0].price}/>
                    <Product 
                    title={this.state.product[1].title}
                    price={this.state.product[1].price}
                    change={this.changeTitleHandler}/>
                    <Product 
                    title={this.state.product[2].title}
                    price={this.state.product[2].price}/>
                    <Product 
                    title={this.state.product[3].title}
                    price={this.state.product[3].price}
                    click={this.changePriceHandler}/> */}
                    {this.state.product.map((item,index)=>{return <Product 
                     click={()=>this.deleteProductHandler(index)} 
                     change={(event)=>this.changeTitleHandler(event,item.id)}
                     title={item.title} 
                     price={item.price}
                     key={index}/>})}
                    </div>
                
            )
        }
    return( 
    <div className="center">

        <h1 id="main">book store</h1>
        <button style={btn} onClick={this.toggleProductHandler}>show/hide product</button>
        {products}
        <button className="btn" onClick={this.changePriceHandler.bind(this,"bind")}>change price</button>
        <button className="btn" onClick={()=>{this.changePriceHandler("arrow")}}>change price</button>
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