import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaUsers, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { Image } from 'antd';
import 'antd/dist/reset.css';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const TechSection = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 0;
  margin: 4rem 0;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

const TechCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const TechIcon = styled.div<{ color: string }>`
  font-size: 3rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechName = styled.h4`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const TechDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.85rem;
  line-height: 1.4;
`;

const AISection = styled.div`
  background: ${props => props.theme.colors.gradient.secondary};
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
`;

const AIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AICard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const AIIcon = styled.div<{ color: string }>`
  font-size: 3.5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AIName = styled.h4`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const AIDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ProjectInfo = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
`;

const ProjectText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const GallerySection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const GalleryCaption = styled.div`
  padding: 1.5rem;
`;

const GalleryCaptionTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const GalleryCaptionText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Home: React.FC = () => {
  const timelineData = [
    {
      year: "1914",
      event: "Sinh tại xã Quảng Thọ, huyện Quảng Điền, Thừa Thiên Huế"
    },
    {
      year: "1937", 
      event: "Gia nhập Đảng Cộng sản Đông Dương"
    },
    {
      year: "1945",
      event: "Cách mạng Tháng Tám thành công, tham gia xây dựng chính quyền cách mạng"
    },
    {
      year: "1954",
      event: "Chỉ đạo kháng chiến chống Pháp thắng lợi, giữ chức Chủ nhiệm Tổng cục Chính trị"
    },
    {
      year: "1964-1967",
      event: "Làm Bí thư Trung ương Cục miền Nam, trực tiếp chỉ đạo chiến trường"
    },
    {
      year: "1967",
      event: "Mất tại Hà Nội, để lại niềm tiếc thương vô hạn"
    }
  ];

  return (
    <AboutContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Đại Tướng Nguyễn Chí Thanh</HeroTitle>
          <HeroDescription>
            Người Chiến Sĩ Của Nhân Dân
          </HeroDescription>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderLeft: '4px solid #FF6B35',
            padding: '2rem',
            margin: '2rem auto',
            maxWidth: '800px',
            backdropFilter: 'blur(10px)',
            borderRadius: '8px'
          }}>
            <blockquote style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'white',
              margin: '0',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              "Tất cả vì miền Nam ruột thịt – Quyết chiến, Quyết thắng."
            </blockquote>
            <cite style={{
              display: 'block',
              marginTop: '1rem',
              fontSize: '1rem',
              color: '#FF6B35',
              fontWeight: '600'
            }}>
              — Đại tướng Nguyễn Chí Thanh
            </cite>
          </div>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Giới Thiệu Khái Quát</SectionTitle>
          <ProjectInfo>
            <ProjectText>
              Đại tướng Nguyễn Chí Thanh (1914–1967) là một trong những nhà lãnh đạo kiệt xuất của Đảng Cộng sản Việt Nam, người đã dành trọn cuộc đời cho sự nghiệp giải phóng dân tộc, thống nhất đất nước và xây dựng Quân đội Nhân dân Việt Nam vững mạnh.
            </ProjectText>
            <ProjectText>
              Ông được mệnh danh là "vị tướng của lòng dân" – bởi ông không chỉ là nhà quân sự tài năng, mà còn là người lãnh đạo gần gũi, giản dị, thấu hiểu tâm tư chiến sĩ và nhân dân.
            </ProjectText>
          </ProjectInfo>
        </Container>
      </ContentSection>

      <TechSection>
        <Container>
          <SectionTitle style={{ color: '#2C3E50' }}>Tầm Nhìn & Sứ Mệnh</SectionTitle>
          <TechGrid>
            <TechCard>
              <TechIcon color="#3498db">
                <FaStar />
              </TechIcon>
              <TechName>Tầm Nhìn</TechName>
              <TechDescription>
                Giúp thế hệ trẻ hiểu rõ hơn về một trong những vị tướng có tầm ảnh hưởng sâu sắc nhất trong lịch sử cách mạng Việt Nam.
              </TechDescription>
            </TechCard>
            <TechCard>
              <TechIcon color="#e74c3c">
                <FaBookOpen />
              </TechIcon>
              <TechName>Sứ Mệnh</TechName>
              <TechDescription>
                Lưu giữ và lan tỏa tinh thần "toàn dân đánh giặc", "vì miền Nam ruột thịt", và tư tưởng "vừa hồng vừa chuyên" mà Đại tướng để lại.
              </TechDescription>
            </TechCard>
          </TechGrid>
        </Container>
      </TechSection>

      <ContentSection>
        <Container>
          <SectionTitle>Timeline Tóm Tắt</SectionTitle>
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              content: '',
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '3px',
              background: '#3498db'
            }}></div>
            {timelineData.map((item, index) => (
              <div key={index} style={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '3rem'
              }}>
                <div style={{
                  content: '',
                  position: 'absolute',
                  left: '-8px',
                  top: '8px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#FF6B35',
                  border: '3px solid white'
                }}></div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#3498db',
                  marginBottom: '0.5rem'
                }}>
                  {item.year}
                </div>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </ContentSection>

      <GallerySection>
        <Container>
          <SectionTitle>Hình Ảnh Lịch Sử</SectionTitle>
          <GalleryGrid>
            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-portrait-home.jpg" 
                  alt="Chân dung Đại tướng Nguyễn Chí Thanh"
                  preview={{
                    mask: 'Xem ảnh'
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Chân dung Đại tướng</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Hình ảnh chân dung trang trọng của Đại tướng Nguyễn Chí Thanh, biểu tượng của sự kiên cường và trí tuệ.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-soldiers-home.jpg" 
                  alt="Đại tướng cùng bộ đội"
                  preview={{
                    mask: 'Xem ảnh'
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Cùng chiến sĩ</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng luôn sống và chiến đấu cùng bộ đội, thể hiện phong cách lãnh đạo gần gũi, sâu sát.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-battlefield-home.jpg" 
                  alt="Đại tướng tại chiến trường"
                  preview={{
                    mask: 'Xem ảnh'
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Tại chiến trường</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Hình ảnh Đại tướng chỉ đạo chiến đấu tại miền Nam, nơi ông dành trọn tâm huyết.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-meeting-home.jpg" 
                  alt="Đại tướng trong cuộc họp"
                  preview={{
                    mask: 'Xem ảnh'
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Chỉ đạo tác chiến</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng trong một cuộc họp chỉ đạo tác chiến, thể hiện tầm nhìn chiến lược sắc bén.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-people-home.jpg" 
                  alt="Đại tướng gặp gỡ nhân dân"
                  preview={{
                    mask: 'Xem ảnh'
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Gần gũi nhân dân</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng gặp gỡ và động viên nhân dân, luôn tin tưởng vào sức mạnh quần chúng.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>
          </GalleryGrid>
        </Container>
      </GallerySection>

      <AISection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>Khám Phá Thêm</SectionTitle>
          <AIGrid>
            <Link to="/journey" style={{ textDecoration: 'none' }}>
              <AICard>
                <AIIcon color="#FF6B35">
                  <FaCalendarAlt />
                </AIIcon>
                <AIName>Tiểu Sử & Sự Nghiệp</AIName>
                <AIDescription>
                  Tìm hiểu chi tiết về hành trình hoạt động cách mạng và các cột mốc quan trọng trong cuộc đời Đại tướng.
                </AIDescription>
                <div style={{ marginTop: '1rem', color: '#FF6B35' }}>
                  Khám phá <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </div>
              </AICard>
            </Link>
            <Link to="/historical-context" style={{ textDecoration: 'none' }}>
              <AICard>
                <AIIcon color="#3498db">
                  <FaBookOpen />
                </AIIcon>
                <AIName>Tư Tưởng & Phong Cách</AIName>
                <AIDescription>
                  Phân tích sâu về triết lý sống, phong cách lãnh đạo và giá trị tư tưởng mà Đại tướng để lại.
                </AIDescription>
                <div style={{ marginTop: '1rem', color: '#FF6B35' }}>
                  Tìm hiểu <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </div>
              </AICard>
            </Link>
            <Link to="/activities" style={{ textDecoration: 'none' }}>
              <AICard>
                <AIIcon color="#2ecc71">
                  <FaUsers />
                </AIIcon>
                <AIName>Di Sản & Hình Ảnh</AIName>
                <AIDescription>
                  Khám phá di sản vật chất và tinh thần, hình ảnh quý hiếm và ảnh hưởng lâu dài của Đại tướng.
                </AIDescription>
                <div style={{ marginTop: '1rem', color: '#FF6B35' }}>
                  Xem thêm <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </div>
              </AICard>
            </Link>
          </AIGrid>
        </Container>
      </AISection>
    </AboutContainer>
  );
};

export default Home;