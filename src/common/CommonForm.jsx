import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  flex: 1;
`;

const ScrollTopButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 40px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #cfe776;
  color: #353535;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease;
  z-index: 999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};

  &:hover {
    background-color: #b076e7;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const CommonForm = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <ScrollTopButton visible={showButton} onClick={scrollToTop}>
        <MdOutlineKeyboardArrowUp />
      </ScrollTopButton>
    </Container>
  );
};

export default CommonForm;
