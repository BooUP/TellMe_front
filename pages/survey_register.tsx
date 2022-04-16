import styled from "styled-components";
import RegisterForm from "../components/register/RegisterForm";

import TitleBox from "../components/shared/title/TitieBox";

export default function SurveyList() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <Content>
      <TitleBox
        title="설문 작성"
        buttonInfo={[
          { text: "미리보기", onClick: handleClick },
          { text: "작성완료", onClick: handleClick },
        ]}
      />
      <RegisterForm />
    </Content>
  );
}

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
`;
