import React from 'react';
import styled from 'styled-components';

const Result = ({ result }) => {
  return (
    <Container>
      <ResultImage src={result.resultImg} alt={result.resultTitle} />
      <ResultTitle>{result.resultTitle}</ResultTitle>
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

const ResultImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

const ResultTitle = styled.h2`
  font-size: 1.5rem;
`;

export default Result;
