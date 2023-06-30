//used for validattion
import PropTypes from 'prop-types';
const Produit = ({children,onDeleteProduct,id}) => {
  
  return (
    <> 
    <div className="my-4">
    </div>
      <div className="card text-white bg-warning mb-3" >
        {children}
      </div>
      <button onClick={()=>onDeleteProduct(id)} className="btn btn-danger">Delete</button>
    </>
  )
}

Produit.propTypes={
  label:PropTypes.string,
  price:PropTypes.number.isRequired
}

Produit.defaultProps = {
  label : "my product" ,
  price : 0
} 
//Produit.defaultProps=
export default Produit
// contenu lif lcard kitbdl so hna ghandwzoh as a slot fost tag