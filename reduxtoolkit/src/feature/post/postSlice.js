import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts=createAsyncThunk("post/getPosts",async()=>{
    const result= await axios.get("https://jsonplaceholder.typicode.com/posts")
    return result.data
})

const postSlice=createSlice({
    name:"post",
    initialState:{
        posts:[],
        loading:false
    },
    reducer:{},
    extraReducers:{
        [getPosts.pending]:(state)=>{
            state.loading=true
            console.log("pending",state.loading )
        },
        [getPosts.fulfilled]:(state,{payload})=>{
            console.log("data filled:",payload)
          return{
            ...state,
            posts:payload,
            loading:false
          }
        },
        [getPosts.rejected]:()=>{
            console.log("response rejected")
        }
    }
//extra reducer requiren in casess of promess
})

export default postSlice.reducer