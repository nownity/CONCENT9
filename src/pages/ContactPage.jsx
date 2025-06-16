import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadIn";
import body01 from "../img/insta.png";

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353535;
  color: #cfe776;
  font-size: 2rem;
  padding-top: 70px;
`;

const FirstSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 750;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    aspect-ratio: 1200 / 400;
  }
  @media (max-width: 768px) {
    aspect-ratio: 400 / 300;
  }
`;

const SecondSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 750;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 1200px) {
    aspect-ratio: 1200 / 1200;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #cfe776;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Title2 = styled.div`
  font-size: 20px;
  color: #cfe776;
  margin-top: 50px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 20px;
  }
`;

const TextBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    height: 200px;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    height: 300px;
    justify-content: flex-start;
  }
`;

const ImageWrap = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 500 / 500;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const InstaButton = styled.a`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #cfe776;
  font-size: 24px;
  text-decoration: none;
  padding-left: 20px;
  border-radius: 20px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #b076e7;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactPage = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.2);
  return (
    <Container>
      <FirstSection>
        <Title>“고민하고 있다면, 지금이 시작할 타이밍입니다.”</Title>
        <Title2>
          브랜딩이 막막하다면, 실행부터 함께하는 콘센트9에 편하게 연락 주세요.
        </Title2>
        <Title2>
          이름만 있어도, 아이디어만 있어도, 혹은 아무것도 없어도 괜찮습니다.
        </Title2>
      </FirstSection>
      <SecondSection>
        <ImgBox {...fadeIn}>
          <ImageWrap>
            <StyledImg
              src={body01}
              alt="concent9 메인 이미지 1"
              loading="eager"
              decoding="async"
            />
          </ImageWrap>
        </ImgBox>
        <TextBox>
          <InstaButton target="_blank" rel="noopener noreferrer">
            📩 Maill: concent9.inc@gmail.com
          </InstaButton>
          <InstaButton
            href="https://www.instagram.com/concent_nine"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram: @concent_nine
          </InstaButton>
          <InstaButton
            href="https://www.threads.com/@concent_nine"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 thread: @concent_nine
          </InstaButton>
        </TextBox>
      </SecondSection>
    </Container>
  );
};

export default ContactPage;
