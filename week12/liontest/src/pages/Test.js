import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions, submitAnswers } from '../api';
import styled from 'styled-components';
import Question from '../components/Question';

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions().then(response => {
      setQuestions(response.data.questions);
    });
  }, []);

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex,
    });
  };

  const handleSubmit = () => {
    const answersArray = questions.map(q => answers[q.id]);
    submitAnswers(answersArray).then(response => {
      navigate(`/result/${response.data.correctCount}`);
    });
  };

  return (
    <Container>
      {questions.map(q => (
        <Question
          key={q.id}
          question={q.question}
          choices={q.choices}
          selectedAnswer={answers[q.id]}
          onAnswer={answerIndex => handleAnswer(q.id, answerIndex)}
        />
      ))}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Test;
