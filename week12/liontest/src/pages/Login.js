import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = async () => {
    // Implement login logic using axios or fetch
    try {
      // Call login API
      // Example: const response = await axios.post('/login', { id, pw });
      alert('Login successful!');
      // Redirect to '/test' after successful login
      // Use navigate from react-router-dom to navigate programmatically
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <InputWrapper>
        <Input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <Input type="password" placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} />
      </InputWrapper>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
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

const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Login;
