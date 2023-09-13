import { IconButton, InputBase, Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";
import logo from "../assets/logo-sin-fondo.png"
import logowhite from "../assets/logo-white.png"
import { NavLink } from "react-router-dom";

const categories = [
  {
    title: 'Limpieza facial',
    slug: 'limpieza-facial'
  },
  {
    title: 'Tratamientos',
    slug: 'tratamientos'
  },
  {
    title: 'Cremas y unguentos',
    slug: 'cremas-y-unguentos'
  },
  {
    title: 'Mascarillas',
    slug: 'mascarillas'
  },
  {
    title: 'Tienda',
    slug: 'all'
  }
]

export default function Header() {
    return(
      <header>
        <UpperHeader>
          <LogoWhite src={`${logowhite}`} alt={logo} />
          <Phrase>Hecho en casa, hecho a mano, hecho con amor.</Phrase>
        </UpperHeader>
        <MainHeader>
          <>
            <CartSVG as={MenuSVG} />
            <Logo src={`${logo}`} alt="logo" />
          </>
          <HeaderRight className="header-right">
            <SearchBar />
            <CartSVG />
          </HeaderRight>
        </MainHeader>
        <Categories>
              {categories.map((categorie)=>(<CategoryLink categorie={categorie} key={categorie.slug}/>))}
        </Categories>
      </header>
    )
}

function SearchBar() {
    return (
      <SearchBarPaper component="form" >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'Buscar' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchBarPaper>
    );
}

function CategoryLink({ categorie }) {
  return(
    <StyledNavLink 
      style={({isActive})=>({
        color: isActive?'var(--primary-strong)':'var(--white)', backgroundColor: isActive?'var(--white)':'inherit', 
        fontFamily: 'AbnormalN',
        whiteSpace: 'nowrap'
      })}
      key={categorie.slug} 
      to={`category/${categorie.slug}`}
    >
      {categorie.title}
    </StyledNavLink>
  )
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
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
const Categories = styled.ul`
  display: none;
  margin: 0;
  padding-left: 0rem;
  gap: 10rem;
  background-color: var(--primary-strong);
  color: var(--white);

  @media (min-width: 650px) {
    display: flex;
  }
`
const StyledNavLink = styled(NavLink)`
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 0 10px;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 20rem;
  justify-content: space-between;

  @media (min-width: 650px) {
    flex-grow: 0;
  }
`
const SearchBarPaper = styled(Paper)`
  display: flex;
  align-items: center;
  flex: 1 ;
  padding: 2px 4px; 
  height: 40rem;
  min-width: 210rem;

  @media (min-width: 650px) {
    flex: none;
  }
`

const Logo = styled.img`
  display: none;
  height: 80rem;
  min-width: 188.56rem;

  @media (min-width: 650px){
    display: block;
  }
`
const LogoWhite = styled.img`
  height: 30rem;
  margin-right: auto;
`

const MenuSVG = styled(MenuIcon)`
  @media (min-width: 650px) {
    display: none;
  }
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
