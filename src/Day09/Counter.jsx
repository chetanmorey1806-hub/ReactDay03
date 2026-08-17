import React, { useReducer } from 'react'


function reducer(state , action ){

    switch (action.type){
         case "Increment":
              return {
                 count: state.count +1
              };

        case "Decrement":
              return {
                 count: state.count -1
              };

        case "reset":
              return {
                 count:0
              };

        default:
            return state;
    }
}

const Counter = () => {
const [state , dispatch]=useReducer(reducer , {
    count :0
});

  return (
    <div>
        <h2>{state.count}</h2>

        <button onClick={()=>dispatch({type: "Increment"})} >
            +
        </button>
        <button onClick={()=>dispatch({type: "Decrement"})} >
            -
        </button>
        <button onClick={()=>dispatch({type: "reset"})} >
            Reset
        </button>
    </div>
  )
}

export default Counter
