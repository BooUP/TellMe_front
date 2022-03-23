import { combineReducers } from "redux";
import {
  loginPageModeReducer,
  requestStateReducer,
  signUpValuesReducer,
} from "./login";

const rootReducer = combineReducers({
  loginPageModeReducer,
  requestStateReducer,
  signUpValuesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
