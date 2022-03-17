import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOGIN, SIGN_UP } from "../../store/actions/actionTypes";
import { moveLogin, moveSignUp } from "../../store/actions/login";
import { RootState } from "../../store/reducers";

export default function ButtonGroup() {
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: RootState) => state.loginPageModeReducer
  );
  const changeSignUp = () => {
    dispatch(moveSignUp());
  };

  const changeLogin = () => {
    dispatch(moveLogin());
  };

  return (
    <ButtonList activeBg={mode}>
      <li>
        <Button type="button" onClick={changeLogin} active={mode === LOGIN}>
          SIGN IN
        </Button>
      </li>
      <li>
        <Button type="button" onClick={changeSignUp} active={mode === SIGN_UP}>
          SIGN UP
        </Button>
      </li>
    </ButtonList>
  );
}

interface ActiveBg {
  activeBg: string;
}
const ButtonList = styled.ul<ActiveBg>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100%;
  background: url("btn_login.png") no-repeat top right / 120px 100px;
  background-position: ${(props) =>
    props.activeBg === LOGIN
      ? "top calc(50% - 45px) right"
      : "bottom calc(50% - 35px) right"};
  transition: background 0.8s;
`;

interface ActiveButton {
  active: boolean;
}
const Button = styled.button<ActiveButton>`
  font-size: 22px;
  width: 120px;
  height: 80px;
  color: ${(props) => (props.active ? props.theme.colors.dack_orange : "#fff")};
  transition: color 0.8s;
`;
