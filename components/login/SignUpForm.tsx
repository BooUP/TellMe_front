import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { requestSignUp } from "../../api/signUp";
import { isError, isloading, isSuccess } from "../../store/actions/login";
import { RootState } from "../../store/reducers";

export default function SignUpForm() {
  const [values, setValues] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  // TODO: Create a loading screen
  const { loading } = useSelector(
    (state: RootState) => state.requestStateReducer
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(isloading());

    try {
      const result = await requestSignUp(values);
      dispatch(isSuccess(result.data));
      router.push(`/signUpComplete`);
    } catch (error) {
      dispatch(isError(error));
      alert("회원가입에 실패하였습니다.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <FormArea>
      <Title>
        Welcome to <strong>TellMe</strong>!
      </Title>
      <SubTitle>Create a new account</SubTitle>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </InputBox>
        {/* <InputBox>
          <input
            type="password"
            placeholder="password"
            name="passwordCheck"
            onChange={handleChange}
          />
        </InputBox> */}
        <EmailInfoText>
          <Title>이메일 인증</Title>
          <SubTitle>
            작성한 이메일로 전송되는 메일을 통해 인증 후 사용 가능합니다.
          </SubTitle>
        </EmailInfoText>
        <SubmitButton type="submit">SIGN UP</SubmitButton>
      </Form>
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

const Form = styled.form`
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
