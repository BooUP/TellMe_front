import styled from "styled-components";
import IconButton from "../shared/button/IconButton";

export default function OptionForm() {
  return (
    <>
      <Radio>
        <input type="radio" name="radio" id="r1" readOnly disabled checked />
        <label htmlFor="r1">
          <input type="text" defaultValue="10대" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </Radio>
      <Radio>
        <input type="radio" name="radio" id="r2" readOnly disabled checked />
        <label htmlFor="r2">
          <input type="text" defaultValue="20대" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </Radio>
      <Radio>
        <input type="radio" readOnly disabled checked />
        <label htmlFor="r-add">
          <input
            type="text"
            defaultValue="옵션추가"
            className="add"
            id="r-add"
            readOnly
            disabled
          />
        </label>
      </Radio>
    </>
  );
}

const Radio = styled.div`
  position: relative;
  margin-top: 15px;
  & input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    vertical-align: middle;
  }
  & input[type="radio"] + label::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  & input[type="radio"]:checked + label::before {
    background: rgb(64, 218, 254);
  }
  & input[type="radio"]:checked + label::after {
    border: 1px solid #000;
    background: rgb(253, 199, 73);
  }
  & input[type="radio"]:disabled + label::before,
  & input[type="radio"]:disabled + label::after {
    opacity: 0.3;
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
