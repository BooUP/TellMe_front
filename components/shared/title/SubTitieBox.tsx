import styled from "styled-components";

import Button from "../button/Button";

interface ButtonInfo {
  text: string;
  onClick(): void;
}

interface Props {
  title: string;
  noticeText?: string;
  buttonInfo?: Array<ButtonInfo>;
}

export default function SubTitleBox({ title, noticeText, buttonInfo }: Props) {
  return (
    <TitleArea>
      <Title>
        {title}
        <ToolTipBox>
          <Icon></Icon>
          <ToolTip>{noticeText}</ToolTip>
        </ToolTipBox>
      </Title>
      <ButtonArea>
        {buttonInfo &&
          buttonInfo.map((item) => (
            <Button
              onClick={item.onClick}
              value={item.text}
              key={item.text}
              color="dack_orange"
              borderColor="dack_orange"
            />
          ))}
      </ButtonArea>
    </TitleArea>
  );
}

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const Title = styled.div`
  display: block;
  font-weight: 700;
`;

const ButtonArea = styled.div`
  & button {
    margin-left: 20px;
  }
`;

const ToolTip = styled.span`
  display: none;
  position: absolute;
  top: 50%;
  right: -218px;
  transform: translate(0, -55%);
  width: 200px;
  padding: 6px 10px;
  background: #fff;
  border-radius: 5px;
  font-size: 12px;
  line-height: 1.5;
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: -5px;
    top: 50%;
    transform: rotate(45deg) translate(-30%, -20%);
    width: 10px;
    height: 10px;
    background: #fff;
  }
`;

const ToolTipBox = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-left: 10px;
  :hover ${ToolTip} {
    display: inline-block;
  }
`;
const Icon = styled.i`
  display: inline-block;
  overflow: hidden;
  width: 17px;
  height: 17px;
  background: url("icons.png") no-repeat -130px -184px / 300px;
`;
