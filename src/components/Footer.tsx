import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.gradient.secondary};
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
`;

const FooterDivider = styled.div`
  width: 100px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem auto;
`;

const Copyright = styled.p`
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>
          "Kính dâng Đại tướng Nguyễn Chí Thanh – người chiến sĩ suốt đời vì nước, vì dân."
        </FooterText>
        <FooterDivider />
        <FooterText style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          <strong>Nguồn tham khảo:</strong><br />
          • Bảo tàng Đại tướng Nguyễn Chí Thanh (Huế)<br />
          • Báo Quân đội Nhân dân<br />
          • VTV Đặc biệt – "Nguyễn Chí Thanh: Vị tướng của nhân dân"
        </FooterText>
        <Copyright>
          © {currentYear} - Đại tướng Nguyễn Chí Thanh – Người chiến sĩ của nhân dân
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;