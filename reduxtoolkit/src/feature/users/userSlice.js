import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    users:[ 
        {id:1,name:"mohammed"},
        {id:2,name:"ali"},
        {id:3,name:"said"}
    ],
    loading:true  
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        deleteUser:(state,{payload})=>{
          // console.log("state",state,"action",action)
          console.log(payload)
        return{
            ...state,
            users:state.users.filter(user=>user.id!==payload)
        }
        }
     }
})

export default userSlice.reducer
export const {deleteUser }=userSlice.actions

// retour promiss => extrareducer
// sinon gha f reducer