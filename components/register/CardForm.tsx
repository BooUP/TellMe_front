import styled from "styled-components";
import IconButton from "../shared/button/IconButton";
import OptionForm from "./OptionForm";

export default function CardForm() {
  return (
    <>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <input type="text" defaultValue="성별" />
        </InputBox>
        <OptionForm />
      </Card>
      <Card>
        <ClearButton>
          <IconButton iconType="clear" size="large" onClick={() => {}} />
        </ClearButton>
        <InputBox>
          <input type="text" defaultValue="연령대" />
        </InputBox>
        <OptionForm />
      </Card>
    </>
  );
}

const Card = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 15px 15px;
  background: #fff;
  border-radius: 15px;
`;

const InputBox = styled.div`
  width: calc(100% - 40px);
  & input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="date"] {
    border-radius: 10px;
    border-bottom: none;
    border: 1px solid #000;
  }
`;

const ClearButton = styled.div`
  position: absolute;
  right: 8px;
  top: 20px;
`;
