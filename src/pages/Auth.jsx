import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: #f7f7f7;
`;

const AuthBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0052a3;
  }
`;

const TextLink = styled.button`
  background: none;
  border: none;
  color: #0066cc;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font: inherit;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <AuthBox>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <Text>
          Don't have an account? <TextLink>Sign Up</TextLink>
        </Text>
      </AuthBox>
    </AuthContainer>
  );
};

export default Auth;