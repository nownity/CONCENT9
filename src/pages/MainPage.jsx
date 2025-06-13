import { Link } from "react-router-dom";
import styled from "styled-components";
import body01 from "../img/11.jpg";
import body02 from "../img/2.jpg";

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353535;
`;

const HeroSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 870;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 70px;
  @media (max-width: 768px) {
    aspect-ratio: 768 / 630;
  }
`;

const Title = styled.div`
  font-size: 64px;
  color: #cfe776;
  margin-top: 50px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Subcopy = styled.div`
  font-size: 16px;
  color: #cfe776;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Maincopy = styled.div`
  font-size: 32px;
  color: #cfe776;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const BtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ContactBtn = styled(Link)`
  width: 145px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfe776;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  color: #353535;
  cursor: pointer;

  &:hover {
    background-color: #b076e7;
    transition: background-color 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100px;
    font-size: 17px;
  }
`;

const SecondSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 1200px) {
    aspect-ratio: 1200 / 1500;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    aspect-ratio: 768 / 800;
    flex-direction: column;
  }
`;

const SecondLeft = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondRight = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const ImageWrap = styled.div`
  width: 60%;
  height: auto;
  aspect-ratio: 650 / 1200;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const SecondText = styled.div`
  width: 100%;
  font-size: 20px;
  color: #cfe776;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    width: 90%;
    margin-top: 50px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SecondText1 = styled.div`
  width: 100%;
  font-size: 20px;
  margin-top: 40px;
  color: #cfe776;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    width: 90%;
    justify-content: center;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SecondText2 = styled.div`
  width: 100%;
  font-size: 19px;
  margin-top: 40px;
  color: #cfe776;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    width: 90%;
    justify-content: center;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ThridSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 768px) {
    aspect-ratio: 768 / 800;
    flex-direction: column;
  }
`;

const MainPage = () => {
  return (
    <Container>
      <HeroSection>
        <Title>CONCENT9</Title>
        <Subcopy>Thinking is good. Doing is better.</Subcopy>
        <Maincopy>브랜드를 움직이게 만드는 에너지, CONCENT9</Maincopy>
        <BtnWrap>
          <ContactBtn to="/contact">상담하기</ContactBtn>
        </BtnWrap>
      </HeroSection>
      <SecondSection>
        <SecondLeft>
          <ImageWrap imageurl={body01} />
        </SecondLeft>
        <SecondRight>
          <SecondText>왜 콘센트9인가요?</SecondText>
          <SecondText1>
            브랜드는 누구나 만들 수 있지만, 지속하고 성장시키는 건 또 다른
            일입니다.
          </SecondText1>
          <SecondText1 />
          <SecondText2>
            ✔ 실행 중심 브랜딩 — 그냥 예쁜 게 아니라 팔리는 브랜드
          </SecondText2>
          <SecondText2>
            ✔ 실전 창업 경험 — 정부지원사업 · 펀딩 · 자사몰까지 경험한 실무팀
          </SecondText2>
          <SecondText2>
            ✔ 운영형 템플릿 제공 — 실무에 바로 적용 가능한 실전형 자료
          </SecondText2>
        </SecondRight>
      </SecondSection>
      <ThridSection></ThridSection>
    </Container>
  );
};

export default MainPage;
