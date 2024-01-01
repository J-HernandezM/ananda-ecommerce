import styled from '@emotion/styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';

export const Icon = styled(ShoppingCartIcon)`
  padding: 4px;
  border-radius: 20px;
  font-size: 34px;
  color: var(--primary-strong);
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-strong);
    color: var(--white);
  }
`;
