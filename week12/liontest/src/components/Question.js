import React from 'react';
import styled from 'styled-components';

const Question = ({ question, choices, selectedAnswer, onAnswer }) => {
  return (
    <QuestionContainer>
      <QuestionTitle>{question}</QuestionTitle>
      {choices.map((choice, index) => (
        <Choice
          key={index}
          onClick={() => onAnswer(index + 1)}
          selected={selectedAnswer === index + 1}
        >
          {choice}
        </Choice>
      ))}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const QuestionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Choice = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#d3d3d3' : '#f0f0f0')};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  width: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;

export default Question;
