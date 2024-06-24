import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResult } from '../api';
import Result from '../components/Result';
import styled from 'styled-components';

const ResultPage = () => {
  const { correctCount } = useParams();
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResult(correctCount)
      .then(response => {
        setResult(response.data);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  }, [correctCount]);

  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        result && <Result result={result} />
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
`;

export default ResultPage;
