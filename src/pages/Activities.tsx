import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaFlag, FaStar, FaHandshake } from 'react-icons/fa';
import { Image } from 'antd';
import 'antd/dist/reset.css';

const ActivitiesContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradient.secondary};
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
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: 4px solid ${props => props.theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ActivityHeader = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary}20;
`;

const ActivityYear = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const ActivityTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActivityContent = styled.div`
  padding: 2rem;
`;

const ActivityDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ActivityDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActivityDetail = styled.li`
  color: ${props => props.theme.colors.text};
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: '▶';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
    font-size: 0.8rem;
    top: 0.1rem;
  }
`;

const HeritageSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.surface};
`;

const HeritageTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HeritageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HeritageCard = styled.div`
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

const HeritageImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textLight};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::before {
    
    position: absolute;
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

const GallerySection = styled.section`
  padding: 4rem 0;
  background: white;
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
  border: 1px solid #e0e0e0;

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

const HeritageCaption = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const HeritageCaptionTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 1.1rem;
`;

const HeritageCaptionText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ConclusionSection = styled.section`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 4rem 2rem;
  margin: 4rem 0;
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
`;

const ConclusionTitle = styled.h3`
  color: white;
  margin-bottom: 2rem;
`;

const ConclusionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  opacity: 0.95;
`;

const Activities = () => {
  return (
    <ActivitiesContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Di Sản & Hình Ảnh</HeroTitle>
          <HeroDescription>
            Khẳng định ảnh hưởng lâu dài của Đại tướng Nguyễn Chí Thanh đối với lịch sử, thế hệ trẻ và văn hóa dân tộc Việt Nam
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <TimelineSection>
        <TimelineContainer>
          <SectionTitle>Di sản vật chất và tinh thần</SectionTitle>
          <IntroText>
            Đại tướng Nguyễn Chí Thanh để lại những di sản quý báu cho đất nước và dân tộc, từ các công trình vật chất 
            đến những giá trị tinh thần vô giá mà thế hệ hôm nay vẫn đang kế thừa và phát huy.
          </IntroText>

          <ActivitiesGrid>
            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1914-1937</ActivityYear>
                <ActivityTitle>
                  <FaHandshake />
                  Thời niên thiếu và hình thành lý tưởng
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Sinh ra trong gia đình nông dân nghèo nhưng giàu truyền thống yêu nước, từ nhỏ Nguyễn Vịnh đã có tinh thần phản kháng với áp bức.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Chứng kiến cảnh nông dân bị bóc lột, sớm hình thành tư tưởng đấu tranh
                  </ActivityDetail>
                  <ActivityDetail>
                    Tham gia phong trào cách mạng và gia nhập Đảng năm 1937
                  </ActivityDetail>
                  <ActivityDetail>
                    Rèn luyện ý chí cách mạng trong nhà tù Lao Bảo
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1945-1954</ActivityYear>
                <ActivityTitle>
                  <FaFlag />
                  Kháng chiến chống Pháp
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Sau Cách mạng Tháng Tám, tham gia lãnh đạo phong trào cách mạng và xây dựng lực lượng vũ trang.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Giữ chức Chính ủy Liên khu IV, xây dựng lực lượng tại chiến khu Việt Bắc
                  </ActivityDetail>
                  <ActivityDetail>
                    Chủ nhiệm Tổng cục Chính trị Quân đội Nhân dân Việt Nam
                  </ActivityDetail>
                  <ActivityDetail>
                    Cùng Đại tướng Võ Nguyên Giáp chỉ đạo chiến dịch Điện Biên Phủ lịch sử
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1954-1964</ActivityYear>
                <ActivityTitle>
                  <FaStar />
                  Xây dựng Quân đội và phong trào thi đua
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Tập trung xây dựng Quân đội chính quy, hiện đại và khởi xướng phong trào "Thi đua Quyết thắng".
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Xây dựng Quân đội theo hướng chính quy, hiện đại
                  </ActivityDetail>
                  <ActivityDetail>
                    Khởi xướng và lãnh đạo phong trào "Thi đua Quyết thắng"
                  </ActivityDetail>
                  <ActivityDetail>
                    Đào tạo cán bộ theo phương châm "vừa hồng vừa chuyên"
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>

            <ActivityCard>
              <ActivityHeader>
                <ActivityYear>1964-1967</ActivityYear>
                <ActivityTitle>
                  <FaUsers />
                  Chỉ đạo chiến trường miền Nam
                </ActivityTitle>
              </ActivityHeader>
              <ActivityContent>
                <ActivityDescription>
                  Được cử làm Bí thư Trung ương Cục miền Nam, trực tiếp chỉ đạo chiến trường chống Mỹ cứu nước.
                </ActivityDescription>
                <ActivityDetails>
                  <ActivityDetail>
                    Đề ra chiến thuật "Nắm thắt lưng địch mà đánh" - linh hoạt và sáng tạo
                  </ActivityDetail>
                  <ActivityDetail>
                    Sống và chiến đấu cùng bộ đội, thấu hiểu tâm tư chiến sĩ
                  </ActivityDetail>
                  <ActivityDetail>
                    Góp phần làm thay đổi cục diện chiến tranh, tiến tới thắng lợi cuối cùng
                  </ActivityDetail>
                </ActivityDetails>
              </ActivityContent>
            </ActivityCard>
          </ActivitiesGrid>
        </TimelineContainer>
      </TimelineSection>

      <HeritageSection>
        <TimelineContainer>
          <HeritageTitle>Di sản và hình ảnh</HeritageTitle>
          <HeritageGrid>
            <HeritageCard>
              <HeritageImageContainer>
                <Image 
                  src="/images/nguyen-chi-thanh-with-soldiers.jpg" 
                  alt="Đại tướng Nguyễn Chí Thanh cùng chiến sĩ"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </HeritageImageContainer>
              <HeritageCaption>
                <HeritageCaptionTitle>Đại tướng cùng chiến sĩ</HeritageCaptionTitle>
                <HeritageCaptionText>
                  Đại tướng Nguyễn Chí Thanh luôn sống và chiến đấu cùng bộ đội, thể hiện phong cách lãnh đạo gần gũi, sâu sát.
                </HeritageCaptionText>
              </HeritageCaption>
            </HeritageCard>
            
            <HeritageCard>
              <HeritageImageContainer>
                <Image 
                  src="/images/nguyen-chi-thanh-battlefield.jpg" 
                  alt="Đại tướng tại chiến trường"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </HeritageImageContainer>
              <HeritageCaption>
                <HeritageCaptionTitle>Tại chiến trường miền Nam</HeritageCaptionTitle>
                <HeritageCaptionText>
                  Hình ảnh Đại tướng chỉ đạo chiến đấu tại miền Nam, nơi ông dành trọn tâm huyết cho sự nghiệp giải phóng.
                </HeritageCaptionText>
              </HeritageCaption>
            </HeritageCard>
          </HeritageGrid>
        </TimelineContainer>
      </HeritageSection>

      <GallerySection>
        <TimelineContainer>
          <SectionTitle>Thư Viện Hình Ảnh</SectionTitle>
          <GalleryGrid>
            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-1.jpg" 
                  alt="Di sản vật chất"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Di sản vật chất</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Bảo tàng và các công trình kỷ niệm Đại tướng Nguyễn Chí Thanh.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-2.jpg" 
                  alt="Tác phẩm nghiên cứu"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Tác phẩm nghiên cứu</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Các sách, tài liệu nghiên cứu về cuộc đời và sự nghiệp của Đại tướng.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-3.jpg" 
                  alt="Phong trào thanh niên"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Ảnh hưởng thế hệ trẻ</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Phong trào học tập và noi gương Đại tướng trong thanh niên.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-4.jpg" 
                  alt="Tượng đài kỷ niệm"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Tượng đài kỷ niệm</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Tượng đài Đại tướng Nguyễn Chí Thanh tại các địa phương.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-legacy-5.jpg" 
                  alt="Lễ tưởng niệm"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Lễ tưởng niệm</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Các hoạt động tưởng niệm và tri ân công lao của Đại tướng.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>
          </GalleryGrid>
        </TimelineContainer>
      </GallerySection>

      <ConclusionSection>
        <TimelineContainer>
          <ConclusionTitle>Ý nghĩa lịch sử và di sản</ConclusionTitle>
          <ConclusionText>
            Đại tướng Nguyễn Chí Thanh là một trong những nhà lãnh đạo quân sự - chính trị kiệt xuất của Đảng và Quân đội, 
            người đã cống hiến trọn đời cho sự nghiệp cách mạng của dân tộc.
          </ConclusionText>
          <ConclusionText>
            Tư tưởng "toàn dân đánh giặc", phong cách lãnh đạo gần gũi nhân dân, và tinh thần "vừa hồng vừa chuyên" 
            của ông vẫn còn nguyên giá trị, là nguồn cảm hứng cho các thế hệ cán bộ, chiến sĩ và nhân dân Việt Nam.
          </ConclusionText>
          <ConclusionText style={{ fontWeight: '600', fontSize: '1.2rem' }}>
            "Đại tướng Nguyễn Chí Thanh - Vị tướng của lòng dân, người chiến sĩ suốt đời vì nước, vì dân, 
            để lại cho chúng ta những giá trị tinh thần vô giá và tấm gương sáng mãi về lòng trung thành với Đảng, 
            với Tổ quốc và nhân dân."
          </ConclusionText>
        </TimelineContainer>
      </ConclusionSection>
    </ActivitiesContainer>
  );
};

export default Activities;