import axios from "axios";
import { SignUpForm } from "../store/types/state";

const Axios = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export const requestSignUp = async (params: SignUpForm) => {
  return await Axios.post(`/signup`, params);
};
