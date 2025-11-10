import React from 'react';
import styled from 'styled-components';
import { FaIndustry, FaUsers, FaExclamationTriangle } from 'react-icons/fa';
import { Image } from 'antd';
import 'antd/dist/reset.css';

const HistoricalContextContainer = styled.div`
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

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const ContentContainer = styled.div`
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

const VietnamSituationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SituationCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  border-top: 4px solid ${props => props.theme.colors.accent};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const MovementSection = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 3rem 0;
`;

const MovementTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const MovementList = styled.div`
  display: grid;
  gap: 2rem;
`;

const MovementItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const MovementName = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const MovementPeriod = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
`;

const MovementDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  line-height: 1.6;
`;

const GlobalInfluenceSection = styled.div`
  margin: 4rem 0;
`;

const InfluenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const InfluenceCard = styled.div`
  background: ${props => props.theme.colors.gradient.hero};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.primary}30;
`;

const InfluenceTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const InfluenceText = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const ReasonSection = styled.div`
  background: ${props => props.theme.colors.gradient.primary};
  color: white;
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 3rem 0;
  text-align: center;
`;

const ReasonTitle = styled.h3`
  color: white;
  margin-bottom: 2rem;
`;

const ReasonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ReasonItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  backdrop-filter: blur(10px);
  text-align: left;
`;

const ConclusionSection = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin: 3rem 0;
  text-align: center;
`;

const ContextImageSection = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;

const ContextImage = styled.div`
  max-width: 500px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

const ImageCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
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

const PatrioticMovementImages = styled.div`
  margin: 3rem 0;
`;

const MovementImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MovementImageCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
`;

const MovementCaption = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const HistoricalContext: React.FC = () => {
  return (
    <HistoricalContextContainer className="fade-in">
      <HeroSection>
        <HeroContent>
          <HeroTitle>Tư Tưởng & Phong Cách Lãnh Đạo</HeroTitle>
          <HeroDescription>
            Phân tích sâu về triết lý sống, phong cách lãnh đạo và giá trị tư tưởng mà Đại tướng Nguyễn Chí Thanh để lại cho hậu thế
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <SectionTitle>Tư tưởng "toàn dân đánh giặc"</SectionTitle>
          <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#6C757D' }}>
            Đại tướng Nguyễn Chí Thanh cho rằng sức mạnh của cách mạng đến từ nhân dân. Ông khẳng định tư tưởng quan trọng về chiến tranh nhân dân.
          </p>
          
          <ContextImageSection>
            <ContextImage>
              <Image 
                src="/images/nguyen-chi-thanh-with-people.jpg" 
                alt="Đại tướng Nguyễn Chí Thanh cùng nhân dân"
                preview={{ mask: 'Xem ảnh' }}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <ImageCaption>Đại tướng Nguyễn Chí Thanh luôn gắn bó mật thiết với nhân dân</ImageCaption>
            </ContextImage>
          </ContextImageSection>
          
          <VietnamSituationGrid>
            <SituationCard>
              <CardIcon><FaUsers /></CardIcon>
              <CardTitle>Tư tưởng nhân dân</CardTitle>
              <CardDescription>
                "Không có nhân dân thì không có cách mạng. Nhân dân là gốc rễ của kháng chiến và chiến thắng." - 
                Tư tưởng này góp phần hình thành chiến lược chiến tranh nhân dân.
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaIndustry /></CardIcon>
              <CardTitle>Phong cách lãnh đạo</CardTitle>
              <CardDescription>
                Ông nổi tiếng là người "nói ít, làm nhiều", luôn xuống cơ sở, ăn cùng chiến sĩ, sống như người lính. 
                "Ông không ngồi bàn chỉ huy xa xôi; ông sống ngay trong chiến hào cùng bộ đội."
              </CardDescription>
            </SituationCard>

            <SituationCard>
              <CardIcon><FaExclamationTriangle /></CardIcon>
              <CardTitle>Vừa hồng vừa chuyên</CardTitle>
              <CardDescription>
                Ông luôn nhấn mạnh cán bộ cách mạng phải có đạo đức cách mạng (hồng) và năng lực chuyên môn (chuyên). 
                Quan điểm xây dựng con người mới xã hội chủ nghĩa vẫn còn nguyên giá trị.
              </CardDescription>
            </SituationCard>
          </VietnamSituationGrid>

          <MovementSection>
            <MovementTitle>Tinh thần "Dám nghĩ – Dám làm – Dám chịu trách nhiệm"</MovementTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#6C757D' }}>
              Đại tướng luôn khuyến khích đổi mới, sáng tạo trong chỉ đạo chiến đấu, dám quyết đoán khi cần thiết:
            </p>
            
            <MovementList>
              <MovementItem>
                <MovementName>Chiến thuật linh hoạt</MovementName>
                <MovementPeriod>"Nắm thắt lưng địch mà đánh"</MovementPeriod>
                <MovementDescription>
                  Đại tướng đề ra chiến thuật "Nắm thắt lưng địch mà đánh" - tiếp cận sát địch, vận động linh hoạt, 
                  đánh vào điểm yếu. Không theo sách vở máy móc mà sáng tạo dựa trên thực tiễn chiến trường.
                </MovementDescription>
              </MovementItem>

              <MovementItem>
                <MovementName>Phong trào Thi đua Quyết thắng</MovementName>
                <MovementPeriod>(Khởi xướng 1956)</MovementPeriod>
                <MovementDescription>
                  Phong trào thi đua do Đại tướng khởi xướng, khuyến khích tinh thần đổi mới, sáng tạo trong huấn luyện 
                  và chiến đấu. Tạo động lực mạnh mẽ cho quân đội vươn lên hoàn thành nhiệm vụ.
                </MovementDescription>
              </MovementItem>

              <MovementItem>
                <MovementName>Dám chịu trách nhiệm</MovementName>
                <MovementPeriod>(Suốt sự nghiệp)</MovementPeriod>
                <MovementDescription>
                  Ông luôn đứng ra gánh vác trách nhiệm trong những quyết định quan trọng, đặc biệt khi nhận nhiệm vụ 
                  chỉ đạo chiến trường miền Nam - nhiệm vụ nặng nề và đầy thử thách.
                </MovementDescription>
              </MovementItem>
            </MovementList>
            
            <PatrioticMovementImages>
              <MovementImageGrid>
                <MovementImageCard>
                  <Image 
                    src="/images/nguyen-chi-thanh-leadership.jpg" 
                    alt="Đại tướng chỉ đạo chiến đấu"
                    preview={{ mask: 'Xem ảnh' }}
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                  <MovementCaption>Đại tướng Nguyễn Chí Thanh chỉ đạo chiến đấu</MovementCaption>
                </MovementImageCard>
                <MovementImageCard>
                  <Image 
                    src="/images/nguyen-chi-thanh-training.jpg" 
                    alt="Đại tướng và phong trào thi đua"
                    preview={{ mask: 'Xem ảnh' }}
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  />
                  <MovementCaption>Phong trào "Thi đua Quyết thắng"</MovementCaption>
                </MovementImageCard>
              </MovementImageGrid>
            </PatrioticMovementImages>
          </MovementSection>

          <GlobalInfluenceSection>
            <SectionTitle>Ảnh hưởng và di sản</SectionTitle>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#6C757D' }}>
              Tư tưởng và phong cách lãnh đạo của Đại tướng Nguyễn Chí Thanh có tác động sâu rộng đến Quân đội và nhân dân:
            </p>

            <InfluenceGrid>
              <InfluenceCard>
                <InfluenceTitle>Xây dựng Quân đội nhân dân</InfluenceTitle>
                <InfluenceText>
                  Đóng góp quan trọng trong việc xây dựng Quân đội chính quy, hiện đại, trung thành tuyệt đối với Đảng, 
                  với lòng dân. Phương châm "vừa hồng vừa chuyên" vẫn là nền tảng đào tạo cán bộ.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Tinh thần Quyết thắng</InfluenceTitle>
                <InfluenceText>
                  Phong trào "Thi đua Quyết thắng" lan tỏa mạnh mẽ trong toàn quân, tạo động lực vượt khó, 
                  hoàn thành xuất sắc mọi nhiệm vụ được giao.
                </InfluenceText>
              </InfluenceCard>

              <InfluenceCard>
                <InfluenceTitle>Gương mẫu về phong cách</InfluenceTitle>
                <InfluenceText>
                  Là tấm gương sáng về lãnh đạo gần gũi cơ sở, sâu sát thực tiễn, luôn đặt lợi ích tập thể 
                  lên trên lợi ích cá nhân, sống giản dị và gương mẫu.
                </InfluenceText>
              </InfluenceCard>
            </InfluenceGrid>

            <div className="quote" style={{ margin: '3rem 0', textAlign: 'center' }}>
              "Đại tướng Nguyễn Chí Thanh - Người chiến sĩ cộng sản kiên trung, vị tướng tài của Quân đội nhân dân, 
              người con ưu tú của dân tộc Việt Nam."
            </div>
          </GlobalInfluenceSection>

          <ReasonSection>
            <ReasonTitle>Giá trị tư tưởng và phong cách lãnh đạo</ReasonTitle>
            <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
              Đại tướng Nguyễn Chí Thanh để lại những giá trị quý báu:
            </p>
            
            <ReasonList>
              <ReasonItem>
                <strong>Tinh thần chiến đấu kiên cường:</strong> Luôn dũng cảm, quyết tâm cao trong mọi hoàn cảnh, 
                không bao giờ lùi bước trước kẻ thù.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Gần gũi với nhân dân và chiến sĩ:</strong> Sống giản dị, chia sẻ gian khổ cùng bộ đội, 
                thấu hiểu và tin tưởng vào sức mạnh của quần chúng.
              </ReasonItem>
              
              <ReasonItem>
                <strong>Tư duy đổi mới và sáng tạo:</strong> Luôn khuyến khích đổi mới trong chỉ đạo chiến đấu, 
                dám nghĩ dám làm để tìm ra những giải pháp phù hợp với thực tiễn.
              </ReasonItem>
            </ReasonList>
          </ReasonSection>

          <ConclusionSection>
            <h3 style={{ color: '#B8860B', marginBottom: '1.5rem' }}>Kết luận về di sản</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Đại tướng Nguyễn Chí Thanh là tấm gương sáng về người chiến sĩ cộng sản kiên cường, 
              người lãnh đạo quân sự tài năng và người cán bộ chính trị có tầm nhìn xa.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1.5rem' }}>
              Tư tưởng và phong cách lãnh đạo của ông vẫn còn nguyên giá trị, là nguồn cảm hứng cho các thế hệ cán bộ, chiến sĩ và nhân dân.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', fontWeight: '600', color: '#DC143C' }}>
              Di sản mà Đại tướng để lại không chỉ là những chiến công hiển hách, mà còn là tinh thần yêu nước, 
              tinh thần trách nhiệm và sự gần gũi với nhân dân - những giá trị vĩnh cửu của dân tộc Việt Nam.
            </p>
          </ConclusionSection>
        </ContentContainer>
      </ContentSection>

      <GallerySection>
        <ContentContainer>
          <SectionTitle>Hình Ảnh Lịch Sử</SectionTitle>
          <GalleryGrid>
            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-ideology-1.jpg" 
                  alt="Đại tướng và tư tưởng toàn dân"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Tư tưởng toàn dân đánh giặc</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng tuyên truyền tư tưởng "toàn dân đánh giặc" trong quân đội và nhân dân.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-ideology-2.jpg" 
                  alt="Phong cách lãnh đạo"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Phong cách lãnh đạo gần gũi</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng luôn sâu sát, gần gũi với cơ sở và chiến sĩ.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-ideology-3.jpg" 
                  alt="Vừa hồng vừa chuyên"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Vừa hồng vừa chuyên</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng trong buổi đào tạo cán bộ theo phương châm "vừa hồng vừa chuyên".
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-ideology-4.jpg" 
                  alt="Chỉ đạo tác chiến"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Dám nghĩ - Dám làm</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Đại tướng trong buổi chỉ đạo tác chiến, thể hiện tinh thần dám nghĩ dám làm.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>

            <GalleryCard>
              <GalleryImage>
                <Image 
                  src="/images/nguyen-chi-thanh-ideology-5.jpg" 
                  alt="Di sản tư tưởng"
                  preview={{ mask: 'Xem ảnh' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </GalleryImage>
              <GalleryCaption>
                <GalleryCaptionTitle>Di sản tư tưởng</GalleryCaptionTitle>
                <GalleryCaptionText>
                  Các tác phẩm và bài viết của Đại tướng về xây dựng quân đội và chiến tranh nhân dân.
                </GalleryCaptionText>
              </GalleryCaption>
            </GalleryCard>
          </GalleryGrid>
        </ContentContainer>
      </GallerySection>
    </HistoricalContextContainer>
  );
};

export default HistoricalContext;