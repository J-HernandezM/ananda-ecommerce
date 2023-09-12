import { IconButton, InputBase, Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";
import logo from "../assets/logo-sin-fondo.png"
import logowhite from "../assets/logo-white.png"

export default function Header() {
    return(
      <header>
        <UpperHeader>
          <LogoWhite src={`${logowhite}`} alt={logo} />
          <Phrase>Hecho en casa, hecho a mano, hecho con amor.</Phrase>
        </UpperHeader>
        <MainHeader>
          <div className="header-left">
            <Logo src={`${logo}`} alt="logo" />
          </div>
          <div className="header-center">
            <ul>
              <li>Limpieza facial</li>
              <li>Tratamientos</li>
              <li>Cremas y unguentos</li>
              <li>Mascarillas</li>
              <li>Tienda</li>
            </ul>
          </div>
          <HeaderRight className="header-right">
            <SearchBar />
            <CartSVG />
          </HeaderRight>
        </MainHeader>
      </header>
    )
}

function SearchBar() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, height: 40 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'Buscar' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

const MainHeader = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  padding: 15rem 20rem;
  width: 100%;
  background-color: var(--primary-light);
`
const UpperHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 20rem;
  color: var(--white);
  background-color: var(--primary-strong);
  height: 38rem;
  padding: 8rem 40rem;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20rem;
`
const Logo = styled.img`
  display: none;
  height: 80rem;
  min-width: 188.56rem;

  @media (min-width: 600px){
    display: block;
  }
`
const LogoWhite = styled.img`
  height: 30rem;
  margin-right: auto;
`

const CartSVG = styled(ShoppingCartIcon)`
  padding: 4rem;
  border-radius: 20rem;
  font-size: 34rem;
  color: var(--primary-strong);
  transition: .3s all ease;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-strong);
    color: var(--white)
  }
`

const Phrase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 177rem;
  line-height: 15rem;

  @media (min-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
