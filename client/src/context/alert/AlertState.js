import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import * as uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';
const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid.v4();
    dispatch({ type: SET_ALERT, payload: { id, type, msg } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alerts: state,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
