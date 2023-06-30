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







//context+fournisseur