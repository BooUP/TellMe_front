import { LOGIN, SIGN_UP } from "./actionTypes";

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
