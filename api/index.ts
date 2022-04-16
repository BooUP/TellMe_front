import axios from "axios";
import { SignInForm, SignUpForm } from "../store/types/state";

const Axios = axios.create({
  baseURL: "/api/index",
  timeout: 3000,
});

export const requestSignUp = async (params: SignUpForm) => {
  return await Axios.post(`/signup`, params);
};

export const requestSignIn = async (params: SignInForm) => {
  console.log(params);
  return { data: "로그인 완료" };
  // return await Axios.post(`/signin`, params);
};
