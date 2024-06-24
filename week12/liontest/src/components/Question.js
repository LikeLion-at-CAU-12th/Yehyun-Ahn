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
`;

const QuestionTitle = styled.h2`
  margin-bottom: 10px;
`;

const Choice = styled.button`
  display: block;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#d3d3d3' : '#fff')};
`;

export default Question;
