import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../apis/user'; // user.js 파일에서 signUp 함수 import

const Signup = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // signUp 함수를 호출하여 회원가입 시도
      await signUp(id, pw, name, age);
      alert('Signup successful! Please login.'); // 회원가입 성공 메시지
      navigate('/'); // 로그인 페이지로 이동
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.'); // 회원가입 실패 메시지
    }
  };

  return (
    <Container>
      <Title>Signup</Title>
      <InputWrapper>
        <Input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <Input type="password" placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      </InputWrapper>
      <SignupButton onClick={handleSignup}>Signup</SignupButton>
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignupButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Signup;
