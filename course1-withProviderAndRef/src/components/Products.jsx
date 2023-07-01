
import Counter from './Counter';
import Produit from './Produit';
import { useState,useContext,useRef } from "react"
import {v4 as uuid} from "uuid";
import { ProductContext } from '../contexts/ProductsContext';
function Products() {
  
  const {products,deleteProduct,addProduct}=useContext(ProductContext)

  let showProduct = true ;



  const title=useRef("")
  const price=useRef(0)

  //const[title,setTitle]=useState("")
 // const[price,setPrice]=useState("")



   const[message,setMessage]=useState("")



   const titleInput=(event)=>{
    if(event.target.value === ""){
      setMessage("title is required")}
    else if(event.target.value.trim().length<3){
      setMessage("pls tap more then 3 chars")
    }else{
    setMessage(null)
    //setTitle(event.target.value)

   }}



   const priceInput=(e)=>{
      //setPrice(e.target.value)


    }

    const submitForm=(e)=>{
      e.preventDefault();
      
      let myproduct={
        id:uuid(),
        label:title.current.value,
        price:price.current.value //price:price => just price
      }
      console.log(myproduct)
      addProduct(myproduct)
      //console.log(myproduct)
      //setProducts([myproduct,...products]) //spread operator poour l'ajout
      //setTitle("")
      //setPrice(0)

    }
  

  return (
    <>

    <form onSubmit={submitForm}>
     <div className="form-group my-2">
      <label htmlFor="title" className="form-label">Title
      <input  id="title" ref={title} type="text" onChange={titleInput} className="form-control" />
      </label>

      {message && (     
         <div className="alert alert-danger">
        {message}
      </div> )}


     </div>
     <div className="form-group my-2">
      <label htmlFor="price" className="form-label">Price
      <input  id="price" ref={price}  type="number"  onChange={priceInput} className="form-control" />
      </label>
     </div>
     <button className="btn btn-primary my-2 mb-4">SAVE</button>
    </form>
{title}{price}
      <Counter/>
    {
        showProduct && ( 
        <div>
            {
            products.map((prod,index)=>(
                <div key={index}>

               <Produit id={prod.id} onDeleteProduct={()=>deleteProduct(prod.id)} >
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

//3AYTNA LA ARROW FUNCTION FEDELETE PRODUCT MLI 3AYTNALIHA MN PROVIDER
//KABLOKLIW , bach mkideclenchich jsx lfunction kandiroha arrow functiion , hitach ki executiha dima wakha madwzliha walo
// f jsx , function b params darori khsna arrow func 




//seRef hsen mn dik bzf d states