import ArticleContext from "./ArticleContext";
import { useReducer } from "react";
import articleReducer from "./ArticleReducer";
import { getAllArticles,deleteArticle } from "./ArticleActions"; 
const ArticleProvider =({children})=>{


    const initState={
        articles:[]
    }

    const[state,dispatch]=useReducer(articleReducer,initState)
    
    const getArticles=async() =>{
        let payload =await getAllArticles()
        dispatch({type:"GET_ARTICLES",payload})
    }
    const deleteOne=async(id)=>{
         if(await deleteArticle(id)){
            dispatch({type:"DELETE_ARTICLES",payload:id})
        }
    }

    return (<ArticleContext.Provider 
     value={
        {
        getArticles,
        deleteOne,
        articles:state.articles
        }
     }> {children}</ArticleContext.Provider>)
}

export default ArticleProvider