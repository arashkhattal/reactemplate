import { USER_SIGNIN, USER_SIGNOUT} from "../constant/AuthConstant";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNIN:
      return {
        ...state,
        user: payload?.user,
        isLoggedIn: true,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
