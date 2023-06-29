import React from 'react'
import Counter from './Counter';
import Produit from './Produit';
import { useState } from "react"
function Products() {
  const [products,setProducts]=useState( [
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
    {id : 3 , label : 'samsung',price : 20000}
  ]);
  let showProduct = true ;
const deleteProduct=(id)=>{
let myList=products.filter(product =>product.id!==id)
setProducts((prev)=>{
  console.log(prev)
  return myList
})
}
  return (
    <>
      <Counter/>
    {
        showProduct && ( 
        <div>
            {
            products.map((prod,index)=>(
                <div key={index}>

               <Produit id={prod.id} onDeleteProduct={deleteProduct} >
               <div className="card-header">{prod.label}</div>
                      <div className="card-body">
                  <h4 className="card-title">{prod.label}</h4>
                    <p className="card-text">     
                   <button className="btn btn-success"> {prod.price}</button>
                   </p>
                  </div>
                </Produit> 
                </div>)
            )
            }
        </div>    )   
}
    </>
  )
}
export default Products

//between brackets dima js , wbetween () dima jsx : javascript for xml
// virtual dom hia intermediaire dyalna hit navigateur makirafch xml  wla chihaja
// dik produit ymkn nfskhoha plus 
//slot kitsma freact childer
//products ay tsupprimach khsna nrdoh state