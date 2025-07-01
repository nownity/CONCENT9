import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// 헤더 영역
const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #353535;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #cfe776;
  text-decoration: none;
  text-align: center;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  gap: 28px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  color: ${({ $active }) => ($active ? "#cccccc" : "#cfe776")};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #b076e7;
  }
`;

const Burger = styled.button`
  display: none;
  border: none;
  font-size: 1.7rem;
  color: #cfe776;
  background: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: #353535;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: left 0.3s ease;
  z-index: 1002;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ open }) => (open ? "100%" : "0")};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  z-index: 1000;
  overflow: hidden;
`;

const Header = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  return (
    <>
      <Container>
        <Burger onClick={toggleSidebar}>☰</Burger>
        <Logo to="/">CONCENT9</Logo>
        <Menu>
          <MenuItem to="/about" $active={location.pathname === "/about"}>
            About
          </MenuItem>
          <MenuItem to="/services" $active={location.pathname === "/services"}>
            What We Do
          </MenuItem>
          <MenuItem
            to="/portfolio"
            $active={location.pathname === "/portfolio"}
          >
            Portfolio
          </MenuItem>
          <MenuItem to="/contact" $active={location.pathname === "/contact"}>
            Contact
          </MenuItem>
        </Menu>
      </Container>

      <Overlay open={isSidebarOpen} onClick={closeSidebar} />
      <Sidebar open={isSidebarOpen}>
        <MenuItem to="/about" onClick={closeSidebar}>
          About
        </MenuItem>
        <MenuItem to="/services" onClick={closeSidebar}>
          What We Do
        </MenuItem>
        <MenuItem to="/portfolio" onClick={closeSidebar}>
          Portfolio
        </MenuItem>
        <MenuItem to="/contact" onClick={closeSidebar}>
          Contact
        </MenuItem>
      </Sidebar>
    </>
  );
};

export default Header;
