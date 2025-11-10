import React from 'react';
import styled from 'styled-components';
import { FaShip, FaRoute, FaGlobeAmericas, FaEye } from 'react-icons/fa';
import { Image } from 'antd';
import 'antd/dist/reset.css';

const JourneyContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  padding: 4rem 0;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineSection = styled.section`
  padding: 4rem 0;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${props => props.theme.colors.accent};
  }
`;

const IntroText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const TimelineWrapper = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.theme.colors.primary};
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.accent};
    border: 4px solid white;
    box-shadow: 0 0 0 4px ${props => props.theme.colors.accent};
    
    @media (max-width: 768px) {
      left: 10px;
      width: 16px;
      height: 16px;
    }
  }
`;

const TimelineCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  border-left: 4px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const TimelinePeriod = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const TimelineDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const TimelineDetail = styled.li`
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
  }
`;

const HighlightBox = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.primary}40;
  margin: 2rem 0;
`;

const HighlightTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HighlightText = styled.p`
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.7;
`;

const SignificanceSection = styled.section`
  background: ${props => props.theme.colors.surface};
  padding: 4rem 2rem;
  margin: 4rem 0;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

const SignificanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SignificanceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  text-align: center;
  border-top: 4px solid ${props => props.theme.colors.primary};
`;

const SignificanceIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SignificanceTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SignificanceText = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const JourneyMapSection = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  max-width: 700px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }
`;

const MapCaption = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const GallerySection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  height: 220px;
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
  font-size: 1rem;
  font-weight: 600;
`;

const GalleryCaptionText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.85rem;
  line-height: 1.5;
`;

const JourneyImageContainer = styled.div`
  margin: 2rem 0;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }
`;

const JourneyImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  font-style: italic;
`;

const Journey: React.FC = () => {
  return (
    <JourneyContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Tiểu Sử & Sự Nghiệp</HeroTitle>
          <HeroDescription>
            Hành trình hoạt động cách mạng và các cột mốc chính trong cuộc đời Đại tướng Nguyễn Chí Thanh (1914–1967) - 
            từ thời niên thiếu đến khi trở thành một trong những nhà lãnh đạo kiệt xuất của Đảng và Quân đội.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Tiểu sử chi tiết</SectionTitle>
          <IntroText>
            Cuộc đời Đại tướng Nguyễn Chí Thanh là một hành trình đầy ý nghĩa, từ một thanh niên nông dân nghèo 
            đến vị tướng của lòng dân, người đã cống hiến trọn đời cho sự nghiệp giải phóng dân tộc và xây dựng đất nước.
          </IntroText>

          <JourneyMapSection>
            <MapContainer>
              <Image 
                src="/images/nguyen-chi-thanh-battlefields.jpg" 
                alt="Bản đồ chiến trường Đại tướng Nguyễn Chí Thanh"
                preview={{
                  mask: 'Xem bản đồ'
                }}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <MapCaption>Các chiến trường mà Đại tướng Nguyễn Chí Thanh từng chiến đấu</MapCaption>
            </MapContainer>
          </JourneyMapSection>

          <TimelineWrapper>
            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1914</TimelinePeriod>
                <TimelineTitle>Thời niên thiếu (1914–1937)</TimelineTitle>
                <TimelineDescription>
                  Nguyễn Chí Thanh, tên khai sinh là Nguyễn Vịnh, sinh ngày 1/1/1914 tại làng Niêm Phò, 
                  xã Quảng Thọ, huyện Quảng Điền, tỉnh Thừa Thiên Huế, trong một gia đình nông dân nghèo 
                  nhưng giàu truyền thống yêu nước.
                </TimelineDescription>
                <HighlightBox>
                  <HighlightTitle>
                    <FaShip /> Xuất thân và hình thành nhân cách
                  </HighlightTitle>
                  <HighlightText>
                    Từ nhỏ, ông nổi tiếng thông minh, ham học hỏi và có tinh thần phản kháng với áp bức. 
                    Khi chứng kiến cảnh nông dân bị thực dân, phong kiến bóc lột, Nguyễn Vịnh sớm hình thành 
                    tư tưởng đấu tranh vì công bằng xã hội.
                  </HighlightText>
                </HighlightBox>

                <JourneyImageContainer>
                  <Image 
                    src="/images/nguyen-chi-thanh-young.jpg" 
                    alt="Đại tướng Nguyễn Chí Thanh thời trẻ"
                    preview={{
                      mask: 'Xem ảnh'
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <JourneyImageCaption>Đại tướng Nguyễn Chí Thanh trong thời niên thiếu</JourneyImageCaption>
                </JourneyImageContainer>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1937</TimelinePeriod>
                <TimelineTitle>Tham gia cách mạng và bị tù đày (1937–1945)</TimelineTitle>
                <TimelineDescription>
                  Năm 1937, ông tham gia phong trào cách mạng và gia nhập Đảng Cộng sản Đông Dương.
                  Năm 1938, ông bị bắt giam tại nhà lao Thừa Phủ (Huế), sau đó bị đày ra nhà tù Lao Bảo.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>1937: Gia nhập Đảng Cộng sản Đông Dương</TimelineDetail>
                  <TimelineDetail>1938: Bị bắt giam tại nhà lao Thừa Phủ (Huế)</TimelineDetail>
                  <TimelineDetail>Bị đày ra nhà tù Lao Bảo - nơi ông tiếp tục hoạt động bí mật</TimelineDetail>
                  <TimelineDetail>Tuyên truyền và tổ chức phong trào trong tù, rèn luyện ý chí cách mạng</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1945-1954</TimelinePeriod>
                <TimelineTitle>Trong kháng chiến chống Pháp (1945–1954)</TimelineTitle>
                <TimelineDescription>
                  Sau Cách mạng Tháng Tám, ông tham gia lãnh đạo phong trào cách mạng ở Trung Bộ.
                  Từ 1950, ông được điều ra chiến khu Việt Bắc, giữ các chức vụ quan trọng trong Quân đội.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Sau 1945: Tham gia lãnh đạo phong trào cách mạng ở Trung Bộ</TimelineDetail>
                  <TimelineDetail>1950: Được điều ra chiến khu Việt Bắc, giữ chức Chính ủy Liên khu IV</TimelineDetail>
                  <TimelineDetail>Chủ nhiệm Tổng cục Chính trị Quân đội Nhân dân Việt Nam</TimelineDetail>
                  <TimelineDetail>Cùng Đại tướng Võ Nguyên Giáp chỉ đạo chiến dịch Điện Biên Phủ</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1954-1967</TimelinePeriod>
                <TimelineTitle>Trong thời kỳ xây dựng miền Bắc và chi viện miền Nam (1954–1967)</TimelineTitle>
                <TimelineDescription>
                  Sau Hiệp định Genève, Đại tướng Nguyễn Chí Thanh tập trung xây dựng Quân đội chính quy, hiện đại; 
                  khởi xướng phong trào "Thi đua Quyết thắng".
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Sau 1954: Xây dựng Quân đội chính quy, hiện đại</TimelineDetail>
                  <TimelineDetail>Khởi xướng phong trào "Thi đua Quyết thắng"</TimelineDetail>
                  <TimelineDetail>1964: Được cử làm Bí thư Trung ương Cục miền Nam</TimelineDetail>
                  <TimelineDetail>Trực tiếp chỉ đạo chiến trường chống Mỹ với chiến thuật "Nắm thắt lưng địch mà đánh"</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem>
              <TimelineCard>
                <TimelinePeriod>1967</TimelinePeriod>
                <TimelineTitle>Những năm cuối đời</TimelineTitle>
                <TimelineDescription>
                  Tháng 7 năm 1967, sau chuyến công tác ở miền Nam trở về Hà Nội, Đại tướng Nguyễn Chí Thanh 
                  đột ngột qua đời ở tuổi 53. Sự ra đi của ông là tổn thất to lớn với Đảng, Quân đội và nhân dân.
                </TimelineDescription>
                <TimelineDetails>
                  <TimelineDetail>Tháng 7/1967: Đột ngột qua đời tại Hà Nội ở tuổi 53</TimelineDetail>
                  <TimelineDetail>Trung thành vô hạn với cách mạng, hết lòng vì dân, vì nước</TimelineDetail>
                  <TimelineDetail>Để lại di sản quý báu cho Đảng, Quân đội và nhân dân</TimelineDetail>
                  <TimelineDetail>Tấm gương sáng về người chiến sĩ cộng sản kiên cường</TimelineDetail>
                </TimelineDetails>
              </TimelineCard>
            </TimelineItem>

          </TimelineWrapper>
        </TimelineContainer>
      </TimelineSection>

      <GallerySection>
        <TimelineContainer>
          <SectionTitle>Hình Ảnh Lịch Sử</SectionTitle>
          <GalleryGrid>
            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-youth-journey.jpg" 
                  alt="Đại tướng thời trẻ"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Thời niên thiếu</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Hình ảnh Đại tướng Nguyễn Chí Thanh trong giai đoạn thanh niên, khi mới bắt đầu con đường cách mạng.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-prison-journey.jpg" 
                  alt="Thời kỳ tù đày"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Thời kỳ tù đày</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Di tích nhà tù Lao Bảo, nơi ông rèn luyện ý chí cách mạng kiên cường.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-dien-bien-journey.jpg" 
                  alt="Chiến dịch Điện Biên Phủ"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Điện Biên Phủ</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng trong chiến dịch Điện Biên Phủ lịch sử năm 1954.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-south-journey.jpg" 
                  alt="Tại miền Nam"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Chiến trường miền Nam</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng chỉ đạo chiến đấu tại miền Nam trong giai đoạn 1964-1967.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-journey.jpg" 
                  alt="Di sản Đại tướng"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Di sản vĩ đại</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Tượng đài và các công trình kỷ niệm Đại tướng Nguyễn Chí Thanh.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>
          </GalleryGrid>
        </TimelineContainer>
      </GallerySection>

      <SignificanceSection>
        <TimelineContainer>
          <SectionTitle>Ý nghĩa và tầm quan trọng</SectionTitle>
          <SignificanceGrid>
            <SignificanceCard>
              <SignificanceIcon><FaGlobeAmericas /></SignificanceIcon>
              <SignificanceTitle>Vị tướng của lòng dân</SignificanceTitle>
              <SignificanceText>
                Đại tướng Nguyễn Chí Thanh được biết đến với phong cách lãnh đạo gần gũi, sâu sát cơ sở, 
                luôn sống và chiến đấu cùng chiến sĩ, thấu hiểu tâm tư nguyện vọng của nhân dân.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaRoute /></SignificanceIcon>
              <SignificanceTitle>Đóng góp cho sự nghiệp kháng chiến</SignificanceTitle>
              <SignificanceText>
                Ông đã có vai trò quan trọng trong việc xây dựng Quân đội nhân dân, chỉ đạo chiến dịch Điện Biên Phủ 
                và chiến trường miền Nam, góp phần vào thắng lợi chung của dân tộc.
              </SignificanceText>
            </SignificanceCard>

            <SignificanceCard>
              <SignificanceIcon><FaEye /></SignificanceIcon>
              <SignificanceTitle>Di sản tư tưởng quý báu</SignificanceTitle>
              <SignificanceText>
                Tư tưởng "toàn dân đánh giặc", "vừa hồng vừa chuyên" và tinh thần "Dám nghĩ - Dám làm - Dám chịu trách nhiệm" 
                của ông vẫn còn nguyên giá trị cho thế hệ hôm nay.
              </SignificanceText>
            </SignificanceCard>
          </SignificanceGrid>
        </TimelineContainer>
      </SignificanceSection>
    </JourneyContainer>
  );
};

export default Journey;