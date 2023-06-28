import Counter from './Counter';
import Produit from './Produit';
function products() {
  let products = [
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
  ]
  let showProduct = true ;
    return (
    <>
      <Counter/>

    {
        showProduct && ( 
        <div>
            {
            products.map((prod,index)=>(
                <div key={index}>
               <Produit data={prod}/>
                </div>)
            )
            }
        </div>    )   
}
    </>
  )
}
export default products

//between brackets dima js , wbetween () dima jsx : javascript for xml
// virtual dom hia intermediaire dyalna hit navigateur makirafch xml  wla chihaja
