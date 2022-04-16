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
    <ButtonList activeBg={mode} active={mode === SIGN_UP}>
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
  active: boolean;
}

const ButtonList = styled.ul<ActiveBg>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  position: relative;
  z-index: 10;
  height: 100%;
  & li {
    z-index: 10;
    & :first-child {
      position: relative;
      & ::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: ${(props) =>
          props.activeBg === LOGIN ? "calc(50% - 60px)" : "calc(50% + 20px)"};
        right: 0;
        width: 20px;
        height: 20px;
        background: ${(props) => props.theme.colors.beige};
        transition: top 0.4s;
      }
      & ::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: ${(props) =>
          props.activeBg === LOGIN ? "calc(50% + 40px)" : "calc(50% + 120px)"};
        right: 0;
        width: 20px;
        height: 20px;
        background: ${(props) => props.theme.colors.beige};
        transition: top 0.4s;
      }
    }
    & :last-child {
      position: relative;
      & ::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: ${(props) =>
          props.activeBg === LOGIN ? "calc(50% - 155px)" : "calc(50% - 75px)"};
        right: 0;
        width: 35px;
        height: 35px;
        background: ${(props) => props.theme.colors.cream_orange};
        transition: top 0.4s;
        border-radius: 50%;
        z-index: -1;
      }
      & ::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: ${(props) =>
          props.activeBg === LOGIN ? "calc(50% - 40px)" : "calc(50% + 40px)"};
        right: 0;
        width: 35px;
        height: 35px;
        background: ${(props) => props.theme.colors.cream_orange};
        transition: top 0.4s;
        border-radius: 50%;
        z-index: -1;
      }
    }
  }
  & ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: ${(props) => (props.activeBg === LOGIN ? "calc(50% - 80px)" : "50%")};
    right: 0;
    width: 130px;
    height: 80px;
    background: ${(props) => props.theme.colors.beige};
    transition: top 0.4s;
    border-radius: 20px 0 0 20px;
  }
`;

interface ActiveButton {
  active: boolean;
}
const Button = styled.button<ActiveButton>`
  font-size: 22px;
  width: 130px;
  height: 80px;
  color: ${(props) => (props.active ? props.theme.colors.dack_orange : "#fff")};
  transition: color 0.8s;
`;
