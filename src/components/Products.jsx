function product() {
  let products = [
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
  ]
  let showProduct = true ;
    return (
    <>
    {
        showProduct && ( 
        <ul>
            {
            products.map((prod,index)=>(
                <li key={index}>
                    Name : {prod.label} || price : {prod.price}
                </li>
            )
            )
            }
        </ul>    )   
}
    </>
  )
}
export default product

//between brackets dima js , wbetween () dima jsx : javascript for xml
// virtual dom hia intermediaire dyalna hit navigateur makirafch xml  wla chihaja
