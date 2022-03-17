import { ActionProps, LoginPageState, SignUpForm } from "../types/state";
import { LOGIN, REQUEST_SIGN_UP, SIGN_UP } from "../actions/actionTypes";

const initialState: LoginPageState = {
  loginMode: { mode: LOGIN },
  signUpForm: { email: "", name: "", password: "" },
};

export const loginPageModeReducer = (
  state = initialState.loginMode,
  action: ActionProps
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, mode: LOGIN };
    case SIGN_UP:
      return { ...state, mode: SIGN_UP };

    default:
      return state;
  }
};

//TODO: Remove when not in use
export const signUpReducer = (
  state = initialState.signUpForm,
  action: {
    type: string;
    payload: SignUpForm;
  }
) => {
  switch (action.type) {
    case REQUEST_SIGN_UP:
      return { result: action.payload };

    default:
      return state;
  }
};

export const requestStateReducer = (
  state = {
    loading: false,
    data: null,
    error: null,
  },
  // TODO: Declare the type after checking the api result value
  action: {
    type: string;
    data: any;
    error: any;
  }
) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};
