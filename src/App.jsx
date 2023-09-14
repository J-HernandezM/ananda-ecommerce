import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import './App.css'
import styled from '@emotion/styled'

const MainContainer = styled.main`
  transition: .3s all;
  transform: translateY(${props=>props.mobMenu?'300rem':'108rem'});
  @media (min-width: 650px) {
    transform: translateY(172rem);
  }
`

function App() {
  const [mobMenu, setMobMenu] = useState(false)
  return (
    <HashRouter>
      <Header mobMenu={mobMenu} setMobMenu={setMobMenu}/>
      <Routes>
        <Route path='/' element={<MainContainer mobMenu={mobMenu}><Homepage /></MainContainer>}/>
        <Route path='/category' element={<main>Category display</main>} />
        <Route path='/category/:product' element={<main>Producto</main>} />
        <Route path='*' element={<main>404 Not found</main>}/>
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
