import axios from "axios";
import Swal from "sweetalert2";
import { articleApi } from "../../components/app/api";
//process car 3ana variable d'envirennometn
//mli katcrei variable d'environnment khsq redemared server
//const api=process.env.REACT_APP_URL_API 


export const getAllArticles= async()=> {
    try {
        const response = await articleApi.get();
        // console.log(response.data);
          return response.data
    } catch (error) {
        console.error(error.message);
        //const errorAttributes = Object.keys(error);
       // console.log("Error attributes:", errorAttributes);
    }
}
export const deleteArticle=(id) =>{     
    return Swal.fire({
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
            const response = await articleApi.delete(`/${id}`);
            if (response.status ===200){
                Swal.fire(                         
                      'Deleted!',
                      'Your article has been deleted.',
                      'success'
                    )    
                                        
            }
            return response.status 
        }
            // console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
      })
}