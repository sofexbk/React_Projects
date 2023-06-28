const Produit = (props) => {
    console.log('my data',props)
  return (
    <div>
       <h1>{props.data.label}</h1>  
     <button className="btn btn-success"> {props.data.price}</button>
    </div>
  )
}

export default Produit
