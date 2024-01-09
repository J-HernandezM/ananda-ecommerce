'use client';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import '../../index.css';
import '../../App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const customTheme = createTheme({
  typography: {
    fontSize: 16,
  },
});

const MainContainer = styled.main`
  transition: 0.3s all;
  transform: translateY(${(props) => (props.mobMenu ? '192px' : '0PX')});
`;

const AppLayout = ({ children }) => {
  const [mobMenu, setMobMenu] = useState(false);

  return(
    <ThemeProvider theme={customTheme}>
      <Header mobMenu={mobMenu} setMobMenu={setMobMenu}/>
      <MainContainer mobMenu={mobMenu}>{children}</MainContainer>
      <Footer />
    </ThemeProvider>
  );
}
export default AppLayout;
