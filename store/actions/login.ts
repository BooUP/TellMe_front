import { SignUpForm } from "../types/state";
import {
  ERROR,
  LOADING,
  LOGIN,
  REQUEST_SIGN_UP,
  SIGN_UP,
  SUCCESS,
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

export const signUp = (signUpForm: SignUpForm) => ({
  type: REQUEST_SIGN_UP,
  payload: signUpForm,
});

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
