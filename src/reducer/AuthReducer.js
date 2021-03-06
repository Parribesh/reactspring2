export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case "LOGOUT":
      localStorage.clear();
      return { isLoggedin: false };
    default:
      return state;
  }
};
