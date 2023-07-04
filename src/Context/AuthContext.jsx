import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// user initial state when app loads
const INITIAL_STATE = {
  //get user info from local storage
  //if user object don't exist set to null
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  userIsLogin: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);
  return (
    <AuthContext.Provider
      value={{
        user: state.currentUser,
        userIsLogin: state.userIsLogin,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
