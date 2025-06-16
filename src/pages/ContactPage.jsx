import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadIn";
import body01 from "../img/insta.png";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #353535;
  color: #cfe776;
  font-size: 2rem;
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
`;

const TextBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const ImgBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 650 / 650;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const InstaButton = styled.a`
  padding: 14px 28px;
  background-color: #cfe776;
  color: #353535;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 25px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #b076e7;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.95rem;
  }
`;

const ContactPage = () => {
  const fadeIn = useScrollFadeIn("up", 0.8, 0);
  return (
    <Container>
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
          <InstaButton
            href="https://www.instagram.com/concent_nine"
            target="_blank"
            rel="noopener noreferrer"
          >
            인스타그램 방문
          </InstaButton>
        </TextBox>
      </SecondSection>
    </Container>
  );
};

export default ContactPage;
