import styled from "styled-components";

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
  background: url("images/icon_list.png") no-repeat left center / 100%;
  &:after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${(props) => {
      if (props.status === "Done") return "#ccc";
      if (props.status === "Not Started") return props.theme.colors.beige;
      return props.theme.colors.dack_orange;
    }};
    border-radius: 50%;
  }
`;
