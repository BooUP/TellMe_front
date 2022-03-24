import styled from "styled-components";
import IconButton from "../shared/button/IconButton";
import OptionCheckBox from "./OptionCheckBox";
import OptionForm from "./OptionForm";

export default function CardSurveyForm() {
  return (
    <>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <Label htmlFor="name">항목 이름</Label>
          <input
            type="text"
            defaultValue="설문 항목을 입력해 주세요."
            id="name"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="name">항목 타입</Label>
          <select name="" id="" defaultValue="1">
            <option value="1">단일선택</option>
            <option value="2">다중선택</option>
            <option value="3">단답형</option>
            <option value="4">장문형</option>
          </select>
        </InputBox>
        <OptionForm />
      </Card>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <Label htmlFor="name">항목 이름</Label>
          <input
            type="text"
            defaultValue="설문 항목을 입력해 주세요."
            id="name"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="name">항목 타입</Label>
          <select name="" id="" defaultValue="2">
            <option value="1">단일선택</option>
            <option value="2">다중선택</option>
            <option value="3">단답형</option>
            <option value="4">장문형</option>
          </select>
        </InputBox>
        <OptionCheckBox />
      </Card>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <Label htmlFor="name">항목 이름</Label>
          <input
            type="text"
            defaultValue="설문 항목을 입력해 주세요."
            id="name"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="name">항목 타입</Label>
          <select name="" id="" defaultValue="3">
            <option value="1">단일선택</option>
            <option value="2">다중선택</option>
            <option value="3">단답형</option>
            <option value="4">장문형</option>
          </select>
        </InputBox>
      </Card>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <Label htmlFor="name">항목 이름</Label>
          <input
            type="text"
            defaultValue="설문 항목을 입력해 주세요."
            id="name"
          />
        </InputBox>
        <InputBox>
          <Label htmlFor="name">항목 타입</Label>
          <select name="" id="" defaultValue="4">
            <option value="1">단일선택</option>
            <option value="2">다중선택</option>
            <option value="3">단답형</option>
            <option value="4">장문형</option>
          </select>
        </InputBox>
      </Card>
    </>
  );
}

const InputBox = styled.div`
  position: relative;
  & input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="date"],
  select {
    margin-top: 10px;
  }
`;
const Card = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 15px 70px 15px 15px;
  background: #fff;
  border-radius: 15px;
  & label:first-child {
    margin-top: 0;
  }
  ${InputBox} + ${InputBox} {
    margin-top: 20px;
  }
`;
const Label = styled.label`
  display: block;
  margin-top: 25px;
  font-weight: 700;
  font-size: 13px;
  position: absolute;
  background: #fff;
  top: 3px;
  left: 20px;
`;

const ClearButton = styled.div`
  position: absolute;
  right: 15px;
  top: 28px;
`;
