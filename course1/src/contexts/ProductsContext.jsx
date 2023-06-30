import {createContext} from 'react'

export const ProductContext=createContext()

export const ProductProvider=({children})=>{
   return(<ProductContext.Provider value= {{
    message:"salaaaam",
    title:"Bright crypto"
    }}>
     {children}
   </ProductContext.Provider>) 
}






//we moved the products contenu in products here , so products will be provided with that productsceontexte
//context+fournisseur