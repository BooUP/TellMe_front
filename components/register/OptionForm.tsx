import styled from "styled-components";
import IconButton from "../shared/button/IconButton";

export default function OptionForm() {
  return (
    <>
      <Raido>
        <input type="radio" name="r" id="r1" readOnly disabled />
        <label htmlFor="r1">
          <input type="text" defaultValue="10대" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </Raido>
      <Raido>
        <input type="radio" name="r" id="r2" readOnly disabled />
        <label htmlFor="r2">
          <input type="text" defaultValue="20대" />
          <MinusButton>
            <IconButton iconType="minus" onClick={() => {}} />
          </MinusButton>
        </label>
      </Raido>
      <Raido>
        <input type="radio" readOnly disabled />
        <label htmlFor="r2">
          <input
            type="text"
            defaultValue="옵션추가"
            className="add"
            readOnly
            disabled
          />
        </label>
      </Raido>
    </>
  );
}

const Raido = styled.div`
  position: relative;
  margin-top: 15px;
  & input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #bbb;
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
    background: #bbb;
    border-radius: 50%;
  }
  & input[type="text"] {
    width: calc(100% - 200px);
    height: 30px;
  }
  & input[type="text"].add {
    width: 90px;
    background-color: #fff;
    :hover {
      border-bottom-color: #000;
    }
  }
`;

const MinusButton = styled.span`
  margin-left: 10px;
`;
