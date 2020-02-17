import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
const StyledWrapper = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => (
  <>
  
  <StyledWrapper>
    
    <Heading>Zaloguj się aby zobaczyć swoje notatki online</Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
  </>
);

export default AuthTemplate;