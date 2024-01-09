import styled from '@emotion/styled';
import getMenu from '../../lib/data/menu';
import NavItem from './NavItem';

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

const NavBar = async () => {
  const navItems = await getMenu();

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
