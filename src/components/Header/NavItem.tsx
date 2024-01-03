'use-client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const StyledNavLink = styled(Link)`
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 0 10px;
`;

type NavItemProps = {
  title: string,
  url: string,
};

const NavItem: React.FC<NavItemProps> = ({ title, url }) => {
  const pathname = usePathname();

  return (
    <StyledNavLink
      className={pathname === url ? 'link--active' : 'link--unactive'}
      href={url}
    >
      {title}
    </StyledNavLink>
  );
};

export default NavItem;
