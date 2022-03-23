import { combineReducers } from "redux";
import {
  loginPageModeReducer,
  requestStateReducer,
  signUpValuesReducer,
  signInValuesReducer,
} from "./login";

const rootReducer = combineReducers({
  loginPageModeReducer,
  requestStateReducer,
  signUpValuesReducer,
  signInValuesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
