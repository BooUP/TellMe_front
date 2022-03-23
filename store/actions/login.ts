import { SignInForm, SignUpForm } from "../types/state";
import {
  ERROR,
  LOADING,
  LOGIN,
  SIGN_UP,
  SUCCESS,
  SIGN_UP_FORM_VALUES,
  SIGN_IN_FORM_VALUES,
} from "./actionTypes";

export const moveLogin = () => {
  return {
    type: LOGIN,
  };
};

export const moveSignUp = () => {
  return {
    type: SIGN_UP,
  };
};

export const isloading = () => ({
  type: LOADING,
});

// TODO: Declare the type after checking the api result value
export const isSuccess = (data: any) => ({
  type: SUCCESS,
  data,
});

export const isError = (error: any) => ({
  type: ERROR,
  error,
});

export const setSignUpFormValues = (values: SignUpForm) => ({
  type: SIGN_UP_FORM_VALUES,
  values,
});

export const setSignInFormValues = (values: SignInForm) => ({
  type: SIGN_IN_FORM_VALUES,
  values,
});
