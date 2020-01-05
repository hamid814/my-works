import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    data: 'test',
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const test = (data) => {
    dispatch({
      type: 'test',
    });
  }

  return (
    <Context.Provider
      value={{
        data: state.data,
        test,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;