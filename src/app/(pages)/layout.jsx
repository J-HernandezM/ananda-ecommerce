'use client';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../index.css';
import '../../App.css';
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontSize: 16,
  },
});

const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
export default AppLayout;
