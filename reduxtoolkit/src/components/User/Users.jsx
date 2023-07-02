import {  useSelector } from 'react-redux/es/hooks/useSelector'
import {deleteUser} from '../../feature/users/userSlice'

import React from 'react'
import { useDispatch } from 'react-redux'

const Users = () => {
    
    const users = useSelector(state=>state.utilisateur.users)
    const dispatch=useDispatch()
  return (
    <>
     <h1>List of users</h1>
     {users.map(user=>(
        <div key={user.id}>
            <h2>{user.name}</h2>
            <button onClick={()=>dispatch(deleteUser(user.id))} className="btn btn-danger">Delete</button>        </div>
     ))}
    </>
  )
}

// a laplace d3ayti lfcuntion delete n9dro ndiro type:"user/deleteUser",payload:user.id
//<button onClick={()=>dispatch({type:"user/deleteUser",payload:user.id})} className="btn btn-danger">Delete</button>

//useSelector====>baghi nrecupere states mn store
//usedispatch =====> baghi ndeclenchi une action
export default Users 