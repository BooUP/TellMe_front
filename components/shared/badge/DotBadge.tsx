import styled from "styled-components";
import { PROGRESS_STATUS } from "../../../constants/survey_list";
import { COLOR } from "../../../constants/themes";

interface Props {
  status: string;
}

export default function DotBadge({ status }: Props) {
  return <Badge status={status}>{status}</Badge>;
}

const Badge = styled.div<Props>`
  flex: 1;
  position: relative;
  max-width: 160px;
  height: 40px;
  padding: 0 20px 0 40px;
  border: 1px solid #ccc;
  border-radius: 20px 20px 0 20px;
  margin-left: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ status }) => {
      if (status === PROGRESS_STATUS.DONE) return "#ccc";
      if (status === PROGRESS_STATUS.NOT_STARTED) return COLOR.BEIGE;
      return COLOR.DACK_ORANGE;
    }};
  }
`;
