import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <InnerHeader>
        <Link href="/login">
          <LogoBox>
            <LogoImage src="logo.png" alt="텔미 로고" />
            TELL ME
          </LogoBox>
        </Link>
      </InnerHeader>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  height: 60px;
  padding: 5px 20px;
  background: #fff;
`;

const InnerHeader = styled.header`
  height: 100%;
  width: 100%;
  max-width: 1440px;
`;

const LogoBox = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  color: #ff6701;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
