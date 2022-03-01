import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrap>
      <footer>
        <p>Footer!!!!!</p>
        <p>Footer!!!!!</p>
        <p>Footer!!!!!</p>
      </footer>
    </FooterWrap>
  )
}

const FooterWrap = styled.div`
  height:100px;border-top:1px solid #000;font-size:20px;
`;
