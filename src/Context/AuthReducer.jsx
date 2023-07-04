const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
        userIsLogin: true,
      };
    }

    case "LOGOUT": {
      return {
        currentUser: null,
        userIsLogin: false,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
