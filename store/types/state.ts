export interface ActionProps {
  type: string;
}

export interface LoginPageState {
  loginMode: {
    mode: string;
  };
  signUpForm: SignUpForm;
}

export interface SignUpForm {
  email: string;
  name: string;
  password: string;
  passwordCheck?: string;
}

export interface SignInForm {
  email: string;
  password: string;
}
