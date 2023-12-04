import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';
import styled from '@emotion/styled'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import './App.css'

const MainContainer = styled.main`
  transition: .3s all;
  transform: translateY(${props=>props.mobMenu?'300px':'108px'});
  @media (min-width: 650px) {
    transform: translateY(172px);
  }
`
export const Icon = styled(ShoppingCartIcon)`
  padding: 4px;
  border-radius: 20px;
  font-size: 34px;
  color: var(--primary-strong);
  transition: .3s all ease;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-strong);
    color: var(--white)
  }
`

function App() {
  const [mobMenu, setMobMenu] = useState(false)
  return (
    <HashRouter>
      <Header mobMenu={mobMenu} setMobMenu={setMobMenu}/>
      <Routes>
        <Route path='/' element={<MainContainer mobMenu={mobMenu}>
          <Homepage />
        </MainContainer>}/>
        <Route path='/category' element={<MainContainer>
          <>Category display</>
        </MainContainer>} />
        <Route path='/category/:product' element={<MainContainer>
          <>Producto</>
        </MainContainer>} />
        <Route path='*' element={<MainContainer>
          <>404 Not found</>
        </MainContainer>}/>
      </Routes>

      <Footer mobMenu={mobMenu}/>
    </HashRouter>
  )
}

export default App
