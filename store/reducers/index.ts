import { combineReducers } from "redux";
import loginPageMode from "./login";

const rootReducer = combineReducers({
  loginPageMode,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
