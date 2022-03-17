import styled from "styled-components";

import { COLOR } from "../../../constants/themes";

interface ButtonInfo {
  text: string;
  onClick(): void;
}

interface Props {
  title: string;
  buttonInfo: Array<ButtonInfo>;
}

export default function TitleBox({ title, buttonInfo }: Props) {
  return (
    <TitleArea>
      <Title>{title}</Title>
      <ButtonArea>
        {buttonInfo.map((item) => (
          <Button onClick={item.onClick} key={item.text}>
            {item.text}
          </Button>
        ))}
      </ButtonArea>
    </TitleArea>
  );
}

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 19px;
  z-index: 20;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 25px;
  background: ${COLOR.CREAM_ORANGE};
  font-size: 15px;
  color: #fff;
  font-weight: 700;
`;

const ButtonArea = styled.div`
  ${Button} {
    margin-left: 20px;
  }
`;
