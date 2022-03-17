import styled from "styled-components";

export default function Login() {
  return (
    <FormArea>
      <LogoBox>
        <img src="/images/logo.png" alt="텔미로고" />
      </LogoBox>
      <Form>
        <InputBox>
          <input type="text" placeholder="email" />
        </InputBox>
        <InputBox>
          <input type="password" placeholder="password" />
        </InputBox>
        <ButtonArea>
          <SubmitButton type="submit">SIGN IN</SubmitButton>
        </ButtonArea>
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

const ButtonArea = styled.div`
  text-align: right;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.dack_orange};
  color: ${(props) => props.theme.colors.beige};
  font-size: 20px;
  border: 1px solid #000;
`;
