import { useState } from "react";
import styled from "styled-components";

import ButtonGroup from "../components/login/ButtonGroup";
import LoginForm from "../components/login/LoginForm";
import SignInForm from "../components/login/SignInForm";

export default function Login() {
  const [state, setState] = useState("login");

  const handleClick = (page: string) => {
    setState(page);
  };

  return (
    <Content>
      <TabContent>
        <ButtonGroup pageName={state} onClick={handleClick} />
      </TabContent>
      <FormContent>
        {state === "login" && <LoginForm />}
        {state === "sign in" && <SignInForm />}
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
