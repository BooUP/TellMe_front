import styled from "styled-components";

export default function SignUpForm() {
  return (
    <FormArea>
      <Title>
        Welcome to <strong>TellMe</strong>!
      </Title>
      <SubTitle>Create a new account</SubTitle>
      <Form>
        <InputBox>
          <input type="text" placeholder="email" />
        </InputBox>
        <InputBox>
          <input type="text" placeholder="name" />
        </InputBox>
        <InputBox>
          <input type="password" placeholder="password" />
        </InputBox>
        <InputBox>
          <input type="password" placeholder="password" />
        </InputBox>
      </Form>
      <EmailInfoText>
        <Title>이메일 인증</Title>
        <SubTitle>
          작성한 이메일로 전송되는 메일을 통해 인증 후 사용 가능합니다.
        </SubTitle>
      </EmailInfoText>
      <SubmitButton type="submit">SIGN UP</SubmitButton>
    </FormArea>
  );
}

const FormArea = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 50px;
`;

const Title = styled.p`
  font-size: 35px;
  text-align: left;
  color: ${(props) => props.theme.colors.dack_orange};
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-size: 20px;
  text-align: left;
  color: ${(props) => props.theme.colors.light_orange};
`;

const Form = styled.div`
  margin-top: 50px;
`;

const InputBox = styled.div`
  margin-top: 20px;
  height: 50px;
`;

const EmailInfoText = styled.div`
  margin-top: 20px;
  text-align: left;
  ${Title} {
    font-size: 13px;
  }
  ${SubTitle} {
    margin-top: 8px;
    font-size: 13px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  background: ${(props) => props.theme.colors.dack_orange};
  color: ${(props) => props.theme.colors.beige};
  font-size: 20px;
`;
