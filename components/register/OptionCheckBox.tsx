import styled from "styled-components";
import IconButton from "../shared/button/IconButton";

export default function OptionCheckBox() {
  return (
    <>
      <CheckBox>
        <input
          type="checkbox"
          name="check"
          id="check1"
          readOnly
          disabled
          checked
        />
        <label htmlFor="check1">
          <input type="text" defaultValue="다중 선택항목 1" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </CheckBox>
      <CheckBox>
        <input
          type="checkbox"
          name="check"
          id="check2"
          readOnly
          disabled
          checked
        />
        <label htmlFor="check2">
          <input type="text" defaultValue="다중 선택항목 1" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" readOnly disabled checked />
        <label htmlFor="add">
          <input
            type="text"
            id="add"
            defaultValue="옵션추가"
            className="add"
            readOnly
            disabled
          />
        </label>
      </CheckBox>
    </>
  );
}

const CheckBox = styled.div`
  position: relative;
  margin-top: 15px;
  & input[type="checkbox"] + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 2px;
    border: 1px solid #000;
    vertical-align: middle;
  }
  & input[type="checkbox"] + label::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 0;
    width: 20px;
    height: 20px;
  }
  & input[type="checkbox"]:checked + label::after {
    background: url("images/icon_check_on.png") no-repeat center / 100%;
  }
  & input[type="checkbox"]:disabled + label::after,
  & input[type="checkbox"]:disabled + label::before {
    opacity: 0.2;
  }
  & input[type="text"] {
    width: calc(100% - 200px);
    height: 30px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
  }
  & input[type="text"].add {
    width: 90px;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    :hover {
      border-bottom-color: #000;
    }
  }
`;

const MinusButton = styled.span`
  margin-left: 10px;
`;
