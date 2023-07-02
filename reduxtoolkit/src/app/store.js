import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../feature/users/userSlice" ;
import postReducer  from "../feature/post/postSlice" ;

const store = configureStore({
  reducer: {
    utilisateur:useReducer,
    post:postReducer
    
  }
});
export default store