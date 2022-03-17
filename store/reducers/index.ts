import { combineReducers } from "redux";
import {
  loginPageModeReducer,
  signUpReducer,
  requestStateReducer,
} from "./login";

const rootReducer = combineReducers({
  loginPageModeReducer,
  signUpReducer,
  requestStateReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
