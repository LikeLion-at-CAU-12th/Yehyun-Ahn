import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/test');
  };

  return (
    <Container>
      <Title>🦁LikeLion Test🦁</Title>
      <StartButton onClick={startTest}>바로가기</StartButton>
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

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Home;
