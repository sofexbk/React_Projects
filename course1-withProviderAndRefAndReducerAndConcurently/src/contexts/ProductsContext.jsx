import {createContext,useState} from 'react'

export const ProductContext=createContext()

export const ProductProvider=({children})=>{
   const [products,setProducts]=useState( [
      {id : 1 , label : 'iphone 13',price : 15200},
      {id : 2 , label : 'ipad',price : 15860},
      {id : 3 , label : 'samsung',price : 20000}
    ]);
    const deleteProduct=(id)=>{
      let myList=products.filter(product =>product.id!==id)
      setProducts(myList) 
      /*setProducts((prev)=>{
        console.log(prev)
        return myList
      })*/
      }

      const addProduct=(item)=>{
         setProducts([item,...products])
      }
   return(<ProductContext.Provider value= {{
    message:"salaaaam",
    title:"Bright crypto",
    products,
    setProducts,
    deleteProduct,
    addProduct
    }}>
     {children}
   </ProductContext.Provider>) 
}






//we moved the products contenu in products here , so products will be provided with that productsceontexte
//context+fournisseur