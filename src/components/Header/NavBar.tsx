import styled from '@emotion/styled';
import getMenu from '../../lib/data/menu';
import NavItem from './NavItem';
import { useEffect, useState } from 'react';

const Categories = styled.ul`
  display: none;
  margin: 0;
  padding-left: 0px;
  gap: 10px;
  background-color: var(--primary-strong);
  color: var(--white);

  @media (min-width: 650px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [navItems, setNavItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const items = await getMenu();
      setNavItems(items);
    };

    fetchData();
  }, [])

  return (
    <Categories>
      {navItems.map((navItem) => (
        <NavItem
          title={navItem.title}
          url={navItem.url}
          key={`nav-${navItem.url}`}
        />
      ))}
    </Categories>
  );
};

export default NavBar;
