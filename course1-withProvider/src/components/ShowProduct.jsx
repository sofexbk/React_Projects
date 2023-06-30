import { useParams,useNavigate } from "react-router-dom"

const ShowProduct = () => {
    const navigate=useNavigate()
    const {id,slug}=useParams()
    console.log(id,slug)
    if(+id===404){
        return(
            <h1>Page not found!</h1>
        )
    }
    //console.log(id)
    
    const redirecthome = () =>{
      navigate("/")
    }

  return (
    <>
      <h1>hello im a product</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maxime quod totam et, ullam excepturi aut officia tempora optio quas nemo. Animi libero voluptatem amet ullam commodi laudantium nulla tempore?</p>
        <button onClick={redirecthome}>backhome</button>   
    </>
  )
}

export default ShowProduct
//drna +id bach tforcih iwli number yaéma dir +myparams.id==404 
//useNavigate :