import styled from "styled-components";

import { COLOR } from "../../../constants/themes";

interface Props {
  status: string;
}

export default function ListIcon({ status }: Props) {
  return <Icon status={status}></Icon>;
}

const Icon = styled.i<Props>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background: url("icon_list.png") no-repeat left center / 100%;
  &:after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${({ status }) => {
      if (status === "Done") return "#ccc";
      if (status === "Not Started") return COLOR.BEIGE;
      return COLOR.DACK_ORANGE;
    }};
    border-radius: 50%;
  }
`;
