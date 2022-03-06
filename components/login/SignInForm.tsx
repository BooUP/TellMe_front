import styled from "styled-components";

export default function SignInForm() {
  return (
    <FormArea>
      <h1>회원가입</h1>
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
      이메일 인증
      <br />
      작성한 이메일로 전송되는 메일을 통해 인증 후 사용 가능합니다.
    </FormArea>
  );
}

const FormArea = styled.div`
  padding: 50px 50px;
`;

const LogoBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const Form = styled.div`
  margin-top: 50px;
`;

const InputBox = styled.div`
  margin-top: 20px;
  height: 50px;
  border-bottom: 1px solid #ccc;
`;
