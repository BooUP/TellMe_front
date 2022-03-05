import styled from "styled-components";

interface Props {
  pageName: string;
  onClick: (pageName: string) => void;
}

export default function ButtonGroup({ pageName, onClick }: Props) {
  console.log("pageName: ", pageName);
  return (
    <ButtonList activeBg={pageName}>
      <li>
        <Button
          type="button"
          onClick={() => onClick("login")}
          active={pageName === "login"}
        >
          LOGIN
        </Button>
      </li>
      <li>
        <Button
          type="button"
          onClick={() => onClick("sign in")}
          active={pageName === "sign in"}
        >
          SIGN IN
        </Button>
      </li>
    </ButtonList>
  );
}

interface ActiveBg {
  activeBg: string;
}
const ButtonList = styled.ul<ActiveBg>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100%;
  background: url("btn_login.png") no-repeat top right / 120px 100px;
  background-position: ${(props) =>
    props.activeBg === "login"
      ? "top calc(50% - 45px) right"
      : "bottom calc(50% - 35px) right"};
  transition: background 0.8s;
`;

interface ActiveButton {
  active: boolean;
}
const Button = styled.button<ActiveButton>`
  font-size: 25px;
  width: 120px;
  height: 80px;
  color: ${(props) => (props.active ? "red" : "#fff")};
  transition: color 0.8s;
`;
