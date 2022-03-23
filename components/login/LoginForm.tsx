import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestSignIn } from "../../api";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/patterns";
import { isError, isloading, isSuccess } from "../../store/actions/login";
import { CheckRegexPattern } from "../../utils/login";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [values, setValues] = useState<any>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({
    email: "",
    password: "",
  });

  // TODO: type check
  const emailInput: any = useRef();
  const passwordInput: any = useRef();

  const passEmail: boolean = CheckRegexPattern(values.email, EMAIL_REGEX);
  const passPassword: boolean = CheckRegexPattern(
    values.password,
    PASSWORD_REGEX
  );

  const callrequestSignIn = async () => {
    try {
      const result = await requestSignIn(values);
      dispatch(isSuccess(result.data));
      router.push(`/survey_list`);
    } catch (error) {
      dispatch(isError(error));
      alert("로그인에 실패하였습니다.");
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

    if (!passPassword) {
      errorOccurred(
        "password",
        "영문, 숫자 조합의 8자 이상의 비밀번호가 맞는지 확인해주세요.",
        passwordInput
      );
      return;
    }

    dispatch(isloading());
    callrequestSignIn();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ email: "", name: "", password: "" });
  };

  return (
    <FormArea>
      <LogoBox>
        <img src="/images/logo.png" alt="텔미로고" />
      </LogoBox>
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
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <InputBox>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            ref={passwordInput}
          />
        </InputBox>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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

const Form = styled.form`
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

const ErrorMessage = styled.p`
  margin-top: 6px;
  color: ${(props) => props.theme.colors.dack_orange};
  font-size: 12px;
  text-align: left;
`;
