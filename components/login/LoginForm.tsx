import styled from "styled-components";

export default function Login() {
  return (
    <FormArea>
      <LogoBox>
        <img src="logo.png" alt="텔미로고" />
      </LogoBox>
      <Form>
        <InputBox>
          <input type="text" placeholder="email" />
        </InputBox>
        <InputBox>
          <input type="password" placeholder="password" />
        </InputBox>
        <SubmitButton type="submit">SIGN IN</SubmitButton>
      </Form>
    </FormArea>
  );
}

const FormArea = styled.div`
  padding: 50px 50px;
  max-width: 800px;
  margin: 0 auto;
`;

const LogoBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Form = styled.div`
  margin-top: 100px;
`;

const InputBox = styled.div`
  margin-top: 20px;
  height: 50px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  background: #ff6701;
  color: #fcecdd;
  font-size: 20px;
`;
