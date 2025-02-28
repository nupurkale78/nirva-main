import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  z-index: 999;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0066cc;
    }
  }
`;

const AuthButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #0066cc;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0052a3;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo onClick={() => navigate('/')}>NIRVA</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </NavLinks>
      <AuthButton onClick={() => navigate('/auth')}>Sign In</AuthButton>
    </Nav>
  );
};

export default Navigation;