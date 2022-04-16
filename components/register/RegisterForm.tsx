import styled from "styled-components";
import NoData from "../shared/NoData";
import SubTitieBox from "../shared/title/SubTitieBox";
import CardForm from "./CardForm";
import CardSurveyForm from "./CardSurveyForm";

export default function RegisterForm() {
  return (
    <Form>
      <InputBox>
        <Label htmlFor="title">제목</Label>
        <input type="text" placeholder="제목을 입력해주세요." id="title" />
      </InputBox>
      <InputBox>
        <Label htmlFor="desc">내용</Label>
        <TextArea
          name=""
          id="desc"
          placeholder="상세내용을 입력해주세요."
        ></TextArea>
      </InputBox>
      <DatePicker>
        <InputBox>
          <Label htmlFor="start">날짜</Label>
          <input type="date" placeholder="시작일을 입력해주세요." id="start" />
        </InputBox>
        <InputBox>
          <input type="date" placeholder="종료일을 입력해주세요." id="end" />
        </InputBox>
      </DatePicker>
      <SubTitieBox
        title="기준항목"
        noticeText="정보 수집에 필요한 입력 항목을 입력 해주시기 바랍니다."
        buttonInfo={[
          {
            text: "Create Item",
            onClick: () => {},
          },
        ]}
      />
      <NoData message="기준 항목을 추가하세요." />
      <CardForm />

      <SubTitieBox
        title="설문항목"
        noticeText="툴팁이 필요한가 확인 필요. 필요 시 어떠한 내용이 들어가는지 확인"
        buttonInfo={[
          {
            text: "Create Item",
            onClick: () => {},
          },
        ]}
      />
      <NoData message="설문 항목을 추가하세요." />
      <CardSurveyForm />
    </Form>
  );
}

const Form = styled.div`
  margin-top: 60px;
`;

const Label = styled.label`
  display: block;
  margin-top: 25px;
  font-weight: 700;
`;

const TextArea = styled.textarea`
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 14px;
  resize: none;
  border: 1px solid #000;
`;

const InputBox = styled.div`
  margin-top: 10px;
  & input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="date"] {
    margin-top: 10px;
    border-radius: 10px;
    border-bottom: none;
    border: 1px solid #000;
  }
`;

const DatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  ${InputBox} {
    width: calc(50% - 10px);
  }
  & input[type="date"] {
  }
`;
