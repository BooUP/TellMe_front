import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { requestSignUp } from "../../api";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/patterns";
import {
  isError,
  isloading,
  isSuccess,
  setSignUpFormValues,
} from "../../store/actions/login";
import { RootState } from "../../store/reducers";
import { CheckRegexPattern, isEmpty } from "../../utils/login";
import ErrorMessage from "../shared/form/ErrorMessage";
import Loading from "../shared/loading/Loading";

export default function SignUpForm() {
  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const { loading } = useSelector(
    (state: RootState) => state.requestStateReducer
  );
  const values = useSelector((state: RootState) => state.signUpValuesReducer);

  // TODO: type check
  const emailInput: any = useRef();
  const nameInput: any = useRef();
  const passwordInput: any = useRef();

  const passEmail: boolean = CheckRegexPattern(values.email, EMAIL_REGEX);
  const passName: boolean = !isEmpty(values.name);
  const passPassword: boolean = CheckRegexPattern(
    values.password,
    PASSWORD_REGEX
  );
  const passPasswordCheck: boolean = values.password === values.passwordCheck;

  const callrequestSignUp = async () => {
    try {
      const result = await requestSignUp(values);
      dispatch(isSuccess(result.data));
      router.push(`/signUpComplete`);
    } catch (error) {
      dispatch(isError(error));
      alert("회원가입에 실패하였습니다.");
    }
  };

  const errorOccurred = (name: string, errorMessage: string, ref: any) => {
    setErrors({ ...errors, [name]: errorMessage });
    ref.current.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!passEmail) {
      errorOccurred("email", "유효한 이메일이 아닙니다.", emailInput);
      return;
    }
    if (!passName) {
      errorOccurred("name", "이름을 입력해 주세요.", nameInput);
      return;
    }
    if (!passPassword) {
      errorOccurred(
        "password",
        "영문, 숫자 조합의 8자 이상의 비밀번호가 맞는지 확인해주세요.",
        passwordInput
      );
      return;
    }
    if (!passPasswordCheck) {
      errorOccurred("password", "비밀번호가 일지하지 않습니다.", passwordInput);
      return;
    }

    dispatch(isloading());
    callrequestSignUp();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch(setSignUpFormValues({ ...values, [name]: value }));
    setErrors({ email: "", name: "", password: "" });
  };

  return (
    <>
      {loading && <Loading />}
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
              ref={emailInput}
            />
          </InputBox>
          {errors.email && <ErrorMessage message={errors.email} />}

          <InputBox>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              ref={nameInput}
            />
          </InputBox>
          {errors.name && <ErrorMessage message={errors.name} />}
          <InputBox>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              ref={passwordInput}
            />
          </InputBox>
          {errors.password && <ErrorMessage message={errors.password} />}
          <InputBox>
            <input
              type="password"
              placeholder="password"
              name="passwordCheck"
              onChange={handleChange}
            />
          </InputBox>
          <EmailInfoText>
            <Title>이메일 인증</Title>
            <SubTitle>
              작성한 이메일로 전송되는 메일을 통해 인증 후 사용 가능합니다.
            </SubTitle>
          </EmailInfoText>
          <ButtonArea>
            <SubmitButton type="submit">SIGN UP</SubmitButton>
          </ButtonArea>
        </Form>
      </FormArea>
    </>
  );
}

const FormArea = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 50px;
`;

const Title = styled.p`
  font-size: 36px;
  text-align: left;
  color: #000;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-size: 20px;
  text-align: left;
  color: #666;
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
    font-size: 12px;
    color: #666;
  }
  ${SubTitle} {
    margin-top: 8px;
    font-size: 12px;
  }
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
