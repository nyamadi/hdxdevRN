import * as React from 'react';
import { propUpChildren } from '../Utils/helpers';
import reducer from './auth-reducer';
import authActions from './auth-actions';


export const AuthContext = React.createContext({});

const initialState = {
  token: '',
  user: '',
};

export const AuthProvider = ({ children, ...rest }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  async function setUserHasCompletedOnboarding() {
   //Hdxdev logic here
  }

  async function setUserFirstLogin() {
    //Hdxdev logic here
  }

  async function setToken(token) {
    dispatch({ type: authActions.SET_TOKEN, payload: token });
    //Hdxdev logic here
  }

  async function setUser(user) {
    dispatch({ type: authActions.SET_USER, payload: user });
   //Hdxdev logic here
  }

  function configureStore({ token, user }) {
    dispatch({ type: authActions.SET_USER, payload: JSON.parse(user) });
    dispatch({ type: authActions.SET_TOKEN, payload: token });
  }

  async function logoutUser(navigation) {
   //Hdxdev logic here
  }

  const actions = {
    setUserFirstLogin,
    setUserHasCompletedOnboarding,
    setToken,
    setUser,
    configureStore,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={[state, dispatch, actions]}>{propUpChildren(children, rest)}</AuthContext.Provider>
  );
};

export function useAuthStore() {
  const store = React.useContext(AuthContext);
  return store;
}
