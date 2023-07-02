import axios from "axios";
const baseURL=process.env.REACT_APP_URL_API
export const articleApi = axios.create({
    baseURL: `${baseURL}/articles`
   // timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

  export const productApi = axios.create({
    baseURL: `${baseURL}/articles`
   // timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

  // npm i dotenv