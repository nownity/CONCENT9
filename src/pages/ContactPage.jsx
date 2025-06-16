import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 120px 20px 40px;
  background-color: #faf9c0;
  color: #353535;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 1.1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.a`
  padding: 14px 24px;
  background-color: #353535;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

const ContactPage = () => {
  return (
    <Container>
      <Profile>
        <Name>홍길동 대표</Name>
        <Bio>브랜딩으로 가치를 만드는 사람입니다.</Bio>
        {/* 프로필 이미지 추가 시 여기에 넣어도 좋아요 */}
      </Profile>

      <ButtonGroup>
        <Button
          href="https://www.instagram.com/대표님인스타"
          target="_blank"
          rel="noopener noreferrer"
        >
          인스타그램 보기
        </Button>
        <Button
          href="https://docs.google.com/forms/구글폼링크"
          target="_blank"
          rel="noopener noreferrer"
        >
          상담 신청하기
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ContactPage;
