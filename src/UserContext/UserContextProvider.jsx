import React, { useEffect, useReducer } from 'react';
import UserContext from '../UserContext/UserContext';
import {
  DATA_ERROR,
  DATA_REQUEST,
  DATA_SUCCESS,
  ERROR_MESSAGE,
  USER_API,
} from '../AppConstants/userConstant';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, loading: true };
    case DATA_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case DATA_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error,
      };
    default:
      return state;
  }
};
const UserContextProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(userReducer, initialState);

  const handleFetchData = async () => {
    const _response = await fetch(USER_API);
    const response = await _response.json();
    return response;
  };

  useEffect(() => {
    dispatch({ type: DATA_REQUEST });
    try {
      handleFetchData()
        .then((response) => dispatch({ type: DATA_SUCCESS, data: response }))
        .catch((error) => dispatch({ type: DATA_ERROR, error: ERROR_MESSAGE }));
    } catch (e) {
      dispatch({ type: DATA_ERROR, error: ERROR_MESSAGE });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...userData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
