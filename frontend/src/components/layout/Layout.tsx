import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </Main>
   
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const Main = styled(motion.main)`
  flex: 1;
  margin-top: 60px; /* Height of the navbar */
  position: relative;
  z-index: 1;
  padding: 2rem;
  
  > * {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
    color: ${({ theme }) => theme.colors.text};
  }
`;



export default Layout; 
