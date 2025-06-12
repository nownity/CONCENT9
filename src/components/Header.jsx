import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #353535;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
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
  cursor: pointer;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  gap: 28px;
`;

const MenuItem = styled(Link)`
  color: #cfe776;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #b076e7;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo to="/">CONCENT9</Logo>
      <Menu>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/services">What We Do</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/pricing">Pricing</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
