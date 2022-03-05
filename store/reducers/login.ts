import { ActionProps, LoginPageState } from "../types/state";
import { LOGIN, SIGN_UP } from "../actions/actionTypes";

const initialState: LoginPageState = { mode: LOGIN };

export default (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, mode: LOGIN };
    case SIGN_UP:
      return { ...state, mode: SIGN_UP };

    default:
      return state;
  }
};
