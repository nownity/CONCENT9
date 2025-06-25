import styled from "styled-components";
import about1 from "../img/about1.png";
import body01 from "../img/insta.png";

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353535;
`;

const MainSection = styled.div`
  width: 100%;
  aspect-ratio: 1920 / 900;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1300px) {
    aspect-ratio: 400 / 300;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    aspect-ratio: 400 / 500;
  }
`;

const MainImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: blur(2px);
  transform: scale(1.01);
  @media (max-width: 768px) {
    filter: blur(1.5px);
  }
`;

const TextSetion = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 50px;
  color: #cfe776;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubText = styled.div`
  width: 400px;
  font-size: 15px;
  color: #cfe776;
  margin-top: 15px;
  padding-left: 10px;
  @media (max-width: 768px) {
    width: 300px;
    font-size: 13px;
  }
`;

const SecondSetion = styled.div`
  width: 100%;
  aspect-ratio: 1920 / 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353535;
  @media (max-width: 1300px) {
    flex-direction: column;
    aspect-ratio: 400 / 400;
  }

  @media (max-width: 768px) {
    aspect-ratio: 400 / 600;
  }

  @media (max-width: 550px) {
    aspect-ratio: 400 / 800;
  }

  @media (max-width: 450px) {
    aspect-ratio: 400 / 900;
  }
`;

const LeftSetion = styled.div`
  width: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 80%;
  }
`;

const SecondTitle = styled.div`
  font-size: 42px;
  color: #cfe776;
  padding-left: 60px;
  @media (max-width: 1300px) {
    padding-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SecondSubText = styled.div`
  width: 100%;
  font-size: 15px;
  color: #cfe776;
  margin-top: 10px;
  padding-left: 60px;
  @media (max-width: 1300px) {
    padding-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const StyledImg = styled.img`
  width: 75%;
  aspect-ratio: 500 / 667;
  height: auto;
  object-fit: contain;
`;

const RightSetion = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 80%;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const MainText = styled.div`
  width: 100%;
  font-size: 24px;
  color: #cfe776;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ItroText = styled.div`
  width: 650px;
  font-size: 15px;
  color: #cfe776;
  @media (max-width: 1300px) {
    width: 100%;
    min-width: 650px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    font-size: 13px;
  }
`;

const ItroTextBottom = styled.div`
  width: 650px;
  font-size: 15px;
  color: #cfe776;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #cfe776;
  @media (max-width: 1300px) {
    width: 100%;
    min-width: 650px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    font-size: 13px;
  }
`;

const AboutPage = () => {
  return (
    <Container>
      <MainSection>
        <MainImage
          src={about1}
          alt="배경 이미지"
          loading="eager"
          decoding="async"
        />
        <TextSetion>
          <Title>CONCENT9</Title>
          <SubText>
            We turn ideas into action. From concept to launch, CONCENT9 empowers
            founders to bring their brand vision to life. Whether you're just
            starting or scaling up, we cover the A to Z of execution - branding,
            design, production, and marketing. Practical, fast, and bold. That's
            how we make it happen.
          </SubText>
        </TextSetion>
      </MainSection>
      <SecondSetion>
        <LeftSetion>
          <SecondTitle>About</SecondTitle>
          <SecondSubText>안녕하세요, CONCENT9 입니다.</SecondSubText>
          <ImageWrap>
            <StyledImg
              src={body01}
              alt="concent9 메인 이미지 1"
              loading="eager"
              decoding="async"
            />
          </ImageWrap>
        </LeftSetion>
        <RightSetion>
          <MainText>1. 콘센트9은 무엇을 하는 브랜드인가?</MainText>
          <ItroText>“아이디어만 있으면, 실행은 우리가 합니다.”</ItroText>
          <ItroText>
            콘센트9은 ‘사업의 A부터 Z까지’ 실무 중심으로 실행하는 브랜드
            에이전시입니다.
          </ItroText>
          <ItroText>
            브랜드를 시작하고 싶지만 어디서부터 어떻게 시작해야 할지 막막한 1인
            창업자, 소규모 팀을 위해,
          </ItroText>
          <ItroTextBottom>
            기획 → 디자인 → 제작 → 런칭 → 마케팅 → 시스템 구축까지 전 과정을
            빠르고 유기적으로 실행합니다.
          </ItroTextBottom>
          <MainText>2. ‘콘센트9’의 의미는 무엇인가?</MainText>
          <ItroText>
            아이디어가 전류라면, 콘센트9은 그 전류를 흐르게 하는 ‘전원
            스위치’입니다.
          </ItroText>
          <ItroText>어디에 꽂아도 확실하게 연결되는 실행 파트너.</ItroText>
          <ItroText>‘9’는 당신을 만나 ‘10’이 되는 완성을 의미합니다.</ItroText>
          <ItroTextBottom>
            실행되지 못한 아이디어가 아닌, 완성되는 브랜드를 만듭니다.
          </ItroTextBottom>
          <MainText>3. 우리가 믿는 것</MainText>
          <ItroText>실행은 아이디어보다 가치 있다.</ItroText>
          <ItroText>브랜드는 ‘예쁘게’보다 ‘팔리게’ 만들어야 한다.</ItroText>
          <ItroText>창업자는 혼자지만, 브랜드는 함께 만든다.</ItroText>
          <ItroTextBottom>
            복잡한 건 우리가 할게요. 대표님은 방향만 주세요.
          </ItroTextBottom>
        </RightSetion>
      </SecondSetion>
    </Container>
  );
};

export default AboutPage;
