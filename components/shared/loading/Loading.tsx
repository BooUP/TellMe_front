import styled from "styled-components";

export default function Loading() {
  return <LoadingStyle>데이터 불러오는 중</LoadingStyle>;
}

const LoadingStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  background: url("images/loading.svg") no-repeat center / 80px
    rgba(0, 0, 0, 0.1);
  font-size: 0;
`;
