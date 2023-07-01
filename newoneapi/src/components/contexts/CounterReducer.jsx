
const CounterReducer = (state,action) =>{
  switch (action.type) {
    case "INC":
        return{
            ...state,//spread operator hit possible ikono bzad dstates
           // counter:state.counter+1          
             counter:state.counter+action.payload

        }
        break;
        case "DEC":
            return{
                ...state,//spread operator hit possible ikono bzad dstates
               // counter:state.counter-1
              counter:state.counter-action.payload

            }
            break;
    default:
        return state     
  }
}
export default CounterReducer