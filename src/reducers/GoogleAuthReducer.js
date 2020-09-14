const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...INITIAL_STATE, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...INITIAL_STATE, isSignedIn: false };
    default:
      return state;
  }
};
