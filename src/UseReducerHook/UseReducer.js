import React, { useReducer } from 'react';
const initialValue = { count:0 };

const reducer = (state, dispatch) => {
  switch (dispatch) {
    case 'increment':
      return { count :state.count+ 1 };
    case 'decrement':
      return { count:state.count-1 };
    case 'reset':
      return { count: 0 };
    default:
        return { count: 0 };
  }
};

const UseReducerExample = () => {
    
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch('increment')}>Add</button>
      <button onClick={() => dispatch('decrement' )}>Sub</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default UseReducerExample;
