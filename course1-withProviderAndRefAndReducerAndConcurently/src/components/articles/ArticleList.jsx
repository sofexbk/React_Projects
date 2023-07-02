import {useEffect,useContext} from 'react'
import ArticleContext from '../../contexts/article/ArticleContext'

const ArticleList = () => {
     const  {articles,getArticles,deleteOne} = useContext(ArticleContext)
     
    useEffect(()=>{
      getArticles()
    },[])
  
    return (
    <>
      <h1>List of articles</h1>
    
      { articles &&
        articles.map(article =>(
         <div key={article.id}>   
             <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button onClick={()=>deleteOne(article.id)} className='btn btn-danger btn-sm'>Delete</button>
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