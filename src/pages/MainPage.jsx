import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #7e7e7e;
  transition: background-color 0.3s ease-in-out;
`;

const MainPage = () => {
  return <Container>안녕하세요 CONCENT9</Container>;
};

export default MainPage;
