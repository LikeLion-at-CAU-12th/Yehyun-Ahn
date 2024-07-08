// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('accessToken'); // Check if accessToken exists in localStorage

  const startTest = () => {
    navigate('/test');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Title>🦁LikeLion 테스트🦁</Title>
      {!isLoggedIn && ( // Show login form if not logged in
        <LoginForm>
          <div>
            <div>아이디</div>
            <input type="text" />
          </div>
          <div>
            <div>비밀번호</div>
            <input type="password" />
          </div>
          <ButtonWrapper>
            <button onClick={goToLogin}>로그인</button>
            <button onClick={goToSignup}>회원가입</button>
          </ButtonWrapper>
        </LoginForm>
      )}
      {isLoggedIn && ( // Show start test button if logged in
        <StartButton onClick={startTest}>테스트 시작하기</StartButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Home;
