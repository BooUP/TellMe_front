import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <InnerFooter>
        <p>Copyright &copy;2022 BooUP. All Rights Reserved</p>
      </InnerFooter>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  height: 80px;
`;

const InnerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1440px;
  font-size: 12px;
  color: #999;
`;
