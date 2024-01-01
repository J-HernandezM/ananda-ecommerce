'use client';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import '../../index.css';
import '../../App.css';
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontSize: 16,
  },
});

const MainContainer = styled.main`
  transition: 0.3s all;
  @media (min-width: 650px) {
    transform: translateY(172px);
  }
`;

const AppLayout = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <Header />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </ThemeProvider>
);

export default AppLayout;
