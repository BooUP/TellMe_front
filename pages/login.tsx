import { useSelector } from "react-redux";
import styled from "styled-components";

import ButtonGroup from "../components/login/ButtonGroup";
import LoginForm from "../components/login/LoginForm";
import SignInForm from "../components/login/SignInForm";
import { LOGIN, SIGN_UP } from "../store/actions/actionTypes";
import { RootState } from "../store/reducers";

export default function Login() {
  const { mode } = useSelector((state: RootState) => state.loginPageMode);

  return (
    <Content>
      <TabContent>
        <ButtonGroup />
      </TabContent>
      <FormContent>
        {mode === LOGIN && <LoginForm />}
        {mode === SIGN_UP && <SignInForm />}
      </FormContent>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  height: 100vh;
`;
const TabContent = styled.div`
  width: 40%;
  height: 100%;
  background: url("bg_login.jpeg") no-repeat center;
  background-size: cover;
`;
const FormContent = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
