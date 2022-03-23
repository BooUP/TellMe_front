import styled from "styled-components";

interface Props {
  message: number;
}

export default function ErrorMessage({ message }: Props) {
  return <MessageStyle>{message}</MessageStyle>;
}

const MessageStyle = styled.div`
  margin-top: 6px;
  color: ${(props) => props.theme.colors.dack_orange};
  font-size: 12px;
  text-align: left;
`;
