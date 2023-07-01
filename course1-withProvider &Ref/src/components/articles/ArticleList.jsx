import {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const ArticleList = () => {

   const [articles,setArticles]=useState([])

  const getAllArticles= async()=> {
    try {
        const response = await axios.get("http://localhost:4000/articles");
        
        // console.log(response.data);
        setArticles(response.data);
    } catch (error) {
        console.error(error.message);
        //const errorAttributes = Object.keys(error);
       // console.log("Error attributes:", errorAttributes);
    }
}

    const deleteArticle=async(id) =>{
        

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this article!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( async (result) => {
            try {
                if (result.isConfirmed) {
                const response = await axios.delete(`http://localhost:4000/articles/${id}`);
                if (response.status ===200){
                    setArticles(articles.filter(article =>article.id !== id));
                    
                        Swal.fire(
                          
                          'Deleted!',
                          'Your article has been deleted.',
                          'success'
                        )                         
                } 
            }
                // console.log(response.data);
            } catch (error) {
                console.error(error.message);
            }

          })

 
        

    }


    useEffect(()=>{
      getAllArticles()
    },[])
  
    return (
    <>
      <h1>List of articles</h1>
    
      { articles &&
        articles.map(article =>(
         <div key={article.id}>   
             <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button onClick={()=>deleteArticle(article.id)} className='btn btn-danger btn-sm'>Delete</button>
        </div>
        ))
      }
    </>
  )
}

export default ArticleList
// useEfeect ki executi fchargement dyal component ==== mounted/ created
// 7ydna hada  <button onClick={getAllArticles}>Show all articles</button>
// darori ndiro ()=> lchi fonction khsha id , sinon adeclencha bohdha