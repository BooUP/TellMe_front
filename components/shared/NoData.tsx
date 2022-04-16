import styled from "styled-components";

interface Props {
  message: string;
}

export default function NoData({ message }: Props) {
  return (
    <NoDataStyle>
      <Icon></Icon>
      {message}
    </NoDataStyle>
  );
}

const NoDataStyle = styled.div`
  margin-top: 10px;
  padding: 20px 0 30px;
  background: #fff;
  border-radius: 15px;
  font-size: 18px;
  text-align: center;
`;

const Icon = styled.i`
  display: block;
  width: 50px;
  height: 70px;
  margin: 0 auto 10px;
  background: url("images/icon_light.png") no-repeat center / 100%;
`;
