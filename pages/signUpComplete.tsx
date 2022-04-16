import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../components/shared/button/Button";

export default function signUpComplete() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/login`);
  };
  return (
    <Content>
      <CompletText>
        <IconCheck />
        <div>
          <Title>회원가입이 완료되었습니다.</Title>
          <Text>인증 메일이 발송되었습니다.</Text>
          <Text>이메일 인증 완료 후 정상적으로 서비스 이용이 가능합니다.</Text>
        </div>
      </CompletText>
      <ButtonArea>
        <Button
          onClick={handleClick}
          value="SIGN IN"
          key="SIGN IN"
          color="beige"
          backgroundColor="dack_orange"
          borderColor="black"
        />
      </ButtonArea>
    </Content>
  );
}

const Content = styled.div`
  min-height: calc(100vh - 160px);
  max-width: 900px;
  padding: 70px 0;
  margin: 0 auto;
`;

const CompletText = styled.div`
  display: flex;
`;

const IconCheck = styled.i`
  display: block;
  width: 200px;
  height: 215px;
  background: url("images/icon_check.png") no-repeat center / 100%;
  margin-right: 50px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #000;
  padding-bottom: 20px;
  margin-top: 50px;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #666;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: right;
  & button {
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
`;
