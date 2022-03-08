import styled from "styled-components";
import { COLOR } from "../../../constants/themes";

interface Props {
  number: number;
}

export default function BarProgress({ number }: Props) {
  return <Progress number={number}>{number}</Progress>;
}

const Progress = styled.div<Props>`
  flex: 2;
  position: relative;
  width: 250px;
  height: 10px;
  margin-right: 40px;
  background: #eee;
  font-size: 0;
  border-radius: 10px;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ number }) => `${number}%`};
    height: 10px;
    background: ${(props) =>
      props.number === 100 ? "#ccc" : props.theme.colors.dack_orange};
  }
`;
