// @packages
import { IconButton, InputBase, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

// @styles
import { Icon } from '../../shared/styles/Icon';
import categories from '../../data/categories';
import logo from '../../assets/logo-sin-fondo.png';
import logowhite from '../../assets/logo-white.png';
import MobileMenu from '../MobileMenu';
import NavBar from './NavBar';

const Header = ({mobMenu, setMobMenu}) => {
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobMenu(!mobMenu);
  };

  const navHome = () => {
    router.push('/');
  };

  return (
    <header>
      <UpperHeader>
        <LogoWhite src={logowhite} alt={logo} onClick={navHome} />
        <Phrase>Hecho en casa, hecho a mano, hecho con amor.</Phrase>
      </UpperHeader>
      <MainHeader>
        <>
          <Icon as={MenuSVG} onClick={toggleMobileMenu} />
          <Logo src={logo} alt="logo" onClick={navHome} />
        </>
        <HeaderRight className="header-right">
          <SearchBar />
          <Icon />
        </HeaderRight>
      </MainHeader>
      <NavBar />

      <MobileMenu
        categories={categories}
        mobMenu={mobMenu}
        setMobMenu={setMobMenu}
      />
    </header>
  );
};

function SearchBar() {
  return (
    <SearchBarPaper component="form">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'Buscar' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchBarPaper>
  );
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;
  width: 100%;
  background-color: var(--primary-light);
`;
const UpperHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  color: var(--white);
  background-color: var(--primary-strong);
  height: 38px;
  padding: 8px 40px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  justify-content: space-between;

  @media (min-width: 650px) {
    flex-grow: 0;
  }
`;

const SearchBarPaper = styled(Paper)`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 2px 4px;
  height: 40px;
  min-width: 210px;

  @media (min-width: 650px) {
    flex: none;
  }
`;

const Logo = styled(Image)`
  display: none;
  height: 80px;
  width: auto;
  min-width: 188.56px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 650px) {
    display: block;
  }
`;
const LogoWhite = styled(Image)`
  width: auto;
  height: 30px;
  margin-right: auto;
  position: relative;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

const MenuSVG = styled(MenuIcon)`
  @media (min-width: 650px) {
    display: none;
  }
`;

const Phrase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: var(--font-abnormal);
  min-width: 177px;
  line-height: 15px;

  @media (min-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default Header;
