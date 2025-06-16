import { Link } from "react-router-dom";
import styled from "styled-components";
import body01 from "../img/1-1.png";
import body02 from "../img/1-2.png";
import body03 from "../img/2-1.png";
import body04 from "../img/2-2.png";
import body05 from "../img/3-1.png";
import body06 from "../img/3-2.png";
import { useEffect, useState } from "react";
import useScrollFadeIn from "../hooks/useScrollFadIn";

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
  width: 80%;
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

const ImgBox = styled.div`
  width: 50%;
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
  width: 70%;
  height: auto;
  aspect-ratio: 650 / 750;
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

const ImageWrap2 = styled.div`
  width: 70%;
  height: auto;
  aspect-ratio: 650 / 750;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ThridSection = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 1920 / 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 100px;
  @media (max-width: 1200px) {
    aspect-ratio: 1200 / 1500;
    flex-direction: column;
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContactBtnWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  const fadeInTitle = useScrollFadeIn("up", 0.8, 0);
  const fadeIn2 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn22 = useScrollFadeIn("up", 0.8, 0.2);
  const fadeIn3 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn33 = useScrollFadeIn("up", 0.8, 0.2);
  const fadeIn4 = useScrollFadeIn("up", 0.8, 0);
  const fadeIn44 = useScrollFadeIn("up", 0.8, 0.2);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize(); // 초기값 세팅
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <HeroSection>
        <Title {...fadeInTitle}>CONCENT9</Title>
        <Subcopy {...fadeInTitle}>Thinking is good. Doing is better.</Subcopy>
        <Maincopy {...fadeInTitle}>
          브랜드를 움직이게 만드는 에너지, CONCENT9
        </Maincopy>
        <BtnWrap>
          <ContactBtn to="/contact" {...fadeInTitle}>
            상담하기
          </ContactBtn>
        </BtnWrap>
      </HeroSection>
      <SecondSection>
        <ImgBox {...fadeIn2}>
          <ImageWrap>
            <StyledImg
              src={body01}
              alt="concent9 메인 이미지 1"
              loading="eager"
              decoding="async"
            />
          </ImageWrap>
        </ImgBox>
        <ImgBox {...fadeIn22}>
          <ImageWrap2>
            <StyledImg
              src={body02}
              alt="concent9 메인 이미지2"
              loading="eager"
              decoding="async"
            />
          </ImageWrap2>
        </ImgBox>
      </SecondSection>
      <ThridSection>
        {isMobile ? (
          <>
            <ImgBox {...fadeIn33}>
              <ImageWrap>
                <StyledImg
                  src={body04}
                  alt="concent9 메인 이미지 4"
                  loading="eager"
                  decoding="async"
                />
              </ImageWrap>
            </ImgBox>
            <ImgBox {...fadeIn3}>
              <ImageWrap2>
                <StyledImg
                  src={body03}
                  alt="concent9 메인 이미지 3"
                  loading="eager"
                  decoding="async"
                />
              </ImageWrap2>
            </ImgBox>
          </>
        ) : (
          <>
            <ImgBox {...fadeIn33}>
              <ImageWrap2>
                <StyledImg
                  src={body03}
                  alt="concent9 메인 이미지 3"
                  loading="eager"
                  decoding="async"
                />
              </ImageWrap2>
            </ImgBox>
            <ImgBox {...fadeIn3}>
              <ImageWrap>
                <StyledImg
                  src={body04}
                  alt="concent9 메인 이미지 4"
                  loading="eager"
                  decoding="async"
                />
              </ImageWrap>
            </ImgBox>
          </>
        )}
      </ThridSection>
      <ThridSection>
        <ImgBox {...fadeIn4}>
          <ImageWrap>
            <StyledImg
              src={body05}
              alt="concent9 메인 이미지 5"
              loading="eager"
              decoding="async"
            />
          </ImageWrap>
        </ImgBox>
        <ImgBox {...fadeIn44}>
          <ImageWrap2>
            <StyledImg
              src={body06}
              alt="concent9 메인 이미지 6"
              loading="eager"
              decoding="async"
            />
          </ImageWrap2>
        </ImgBox>
      </ThridSection>
      <ContactBtnWrap>
        <ContactBtn to="/contact">Contact</ContactBtn>
      </ContactBtnWrap>
    </Container>
  );
};

export default MainPage;
