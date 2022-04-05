import Link from "next/link";
import styled from "styled-components";
import { COLOR } from "../constants/themes";

export default function Header() {
  return (
    <HeaderWrap>
      <InnerHeader>
        <Link href="/login">
          <LogoBox>
            <LogoImage src={`images/logo.png`} alt="텔미 로고" />
            TELL ME
          </LogoBox>
        </Link>
      </InnerHeader>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  height: 80px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid ${COLOR.BEIGE};
`;

const InnerHeader = styled.header`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const LogoBox = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  line-height: 80px;
  color: #ff6701;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
