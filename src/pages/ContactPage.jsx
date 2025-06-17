import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadIn";
import body01 from "../img/insta.png";
import { GrMailOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import ContactForm from "../components/ContactFrom";

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
  width: 35%;
  height: auto;
  aspect-ratio: 1920 / 200;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  transition: width 0.3s ease;
  @media (max-width: 1200px) {
    width: 50%;
    aspect-ratio: 1200 / 400;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 80%;
    aspect-ratio: 400 / 300;
  }
`;

const SecondSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 1200px) {
    aspect-ratio: 400 / 900;
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  width: 30%;
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
    height: 400px;
  }
`;

const TextBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 768px) {
  }
`;

const ImageWrap = styled.div`
  width: 100%;
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
  width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #cfe776;
  border: 1px solid #cfe776;
  border-radius: 10px;
  transition: 0.4s ease;
  margin-bottom: 30px;
  text-decoration: none;
  margin-right: 50px;
  cursor: pointer;

  &:hover {
    width: 450px;
    color: #b076e7;
    border: 1px solid #b076e7;
  }

  @media (max-width: 768px) {
    height: 200px;
    margin-right: 0px;
  }
`;

const TextTitle = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextInfo = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactPage = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.2);
  const fadeInText = useScrollFadeIn("up", 1, 0);
  return (
    <Container>
      <FirstSection>
        <ContactForm />
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
        <TextBox {...fadeInText}>
          <InstaButton target="_blank" rel="noopener noreferrer">
            <TextTitle>
              <GrMailOption />
            </TextTitle>
            <TextInfo>concent9.inc@gmail.com</TextInfo>
          </InstaButton>
          <InstaButton
            href="https://www.instagram.com/concent_nine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextTitle>
              <FaInstagram />
            </TextTitle>
            <TextInfo>@concent_nine</TextInfo>
          </InstaButton>
          <InstaButton
            href="https://www.threads.com/@concent_nine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextTitle>
              <FaThreads />
            </TextTitle>
            <TextInfo>@concent_nine</TextInfo>
          </InstaButton>
        </TextBox>
      </SecondSection>
    </Container>
  );
};

export default ContactPage;
