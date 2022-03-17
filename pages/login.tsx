import { useSelector } from "react-redux";
import styled from "styled-components";

import ButtonGroup from "../components/login/ButtonGroup";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import { LOGIN, SIGN_UP } from "../store/actions/actionTypes";
import { RootState } from "../store/reducers";

export default function Login() {
  const { mode } = useSelector(
    (state: RootState) => state.loginPageModeReducer
  );

  return (
    <Content>
      <TabContent>
        <ButtonGroup />
      </TabContent>
      <FormContent>
        {mode === LOGIN && <LoginForm />}
        {mode === SIGN_UP && <SignUpForm />}
      </FormContent>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  height: 100vh;
`;
const TabContent = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  background-image: url("/images/bg_login.jpeg");
  background-size: cover;
  & ::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to left, #fea82f 1%, transparent 99%);
    z-index: 1;
  }
`;
const FormContent = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  text-align: center;
`;
