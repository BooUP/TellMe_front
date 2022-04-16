import {
  ActionProps,
  LoginPageState,
  SignInForm,
  SignUpForm,
} from "../types/state";
import {
  LOGIN,
  SIGN_UP_FORM_VALUES,
  SIGN_UP,
  SIGN_IN_FORM_VALUES,
} from "../actions/actionTypes";

const initialState: LoginPageState = {
  loginMode: { mode: LOGIN },
  signUpForm: { email: "", name: "", password: "", passwordCheck: "" },
  signInForm: { email: "", password: "" },
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

export const signUpValuesReducer = (
  state = initialState.signUpForm,
  action: { type: string; values: SignUpForm }
) => {
  switch (action.type) {
    case SIGN_UP_FORM_VALUES:
      return action.values;
    default:
      return state;
  }
};

export const signInValuesReducer = (
  state = initialState.signInForm,
  action: { type: string; values: SignInForm }
) => {
  switch (action.type) {
    case SIGN_IN_FORM_VALUES:
      return action.values;
    default:
      return state;
  }
};
