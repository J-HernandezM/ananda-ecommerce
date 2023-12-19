'use client'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import { useState } from "react";
import '../../index.css'
import '../../App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import ProductsProvider from '../../context/products'

const customTheme = createTheme({
    typography: {
      fontSize: 16,
    }
})

const MainContainer = styled.main`
  transition: .3s all;
  transform: translateY(${props=>props.mobMenu?'300px':'108px'});
  @media (min-width: 650px) {
    transform: translateY(172px);
  }
`
export default function AppLayout({ children }) {
    const [mobMenu, setMobMenu] = useState(false)

    return (
        <ThemeProvider theme={customTheme}>
            <Header mobMenu={mobMenu} setMobMenu={setMobMenu}/>
            <ProductsProvider>
              <MainContainer mobMenu={mobMenu}>
                  {children}
              </MainContainer>
            </ProductsProvider>
            <Footer mobMenu={mobMenu}/>
        </ThemeProvider>
      )
}