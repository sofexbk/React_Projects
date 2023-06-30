import { useParams, } from "react-router-dom"//useNavigate
import { ProductContext } from "../contexts/ProductsContext"
import { useContext, useState } from "react"
const ShowProduct = () => {
   
   const myParams=useParams()
  const {products}=useContext(ProductContext)
    const myProduct =products.find(product => product.id === +myParams.id)
   const [product,setProduct]=useState(myProduct)

        return(
           <>
           <h1>{product.label}</h1>
           <button className="btn btn-success">{product.price}</button>
           </>
        )


  
   //const navigate=useNavigate()
   // const {id,slug}=useParams() 
    //console.log(id,slug)
       //if(+id===404){
// }

    //console.log(id)
    
    /*const redirecthome = () =>{
      navigate("/")
    }*/

 /* return (
    <>
      <h1>hello im a product</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maxime quod totam et, ullam excepturi aut officia tempora optio quas nemo. Animi libero voluptatem amet ullam commodi laudantium nulla tempore?</p>
        <button onClick={redirecthome}>backhome</button>   
    </>
  )*/

}

export default ShowProduct
//drna +id bach tforcih iwli number yaéma dir +myparams.id==404 
//useNavigate :