import { useState } from "react"

const Counter = () => {
    let [count,setCount]=useState(0)
    let incre = () =>{
        setCount((prev)=>{ // katrecuper l previous  we can do ot ta f delete
            console.log(prev)
            return  count+1
        })
    }
  return (
    <>
      <h2>My counter</h2>
       <h4>{count}</h4>
        <div>Counter</div>      
       <button onClick={incre}>click me</button>
    </>
  )
}

export default Counter
//likikon fost les tag kitsma slot::in react smito childern
// ligdam tag kitsmaa paramters id ...
// kayn far9 bin var wstate
//respect camel case f state