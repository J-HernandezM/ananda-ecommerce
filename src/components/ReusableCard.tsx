'use-client';

// @packages
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';
import styled from '@emotion/styled';

// @scripts
import strapiImageLoader from '../../image-loader';
import { formatPrice } from '../shared/string';
import { Product } from '../lib/data/products';

type ReusableCardProps = {
  image: {
    url: string,
    alternativeText: string,
  },
  onClick: () => void,
  priceDetails: Product['priceDetails'],
  produtId: Product['id'],
  title: string,
};

const ReusableCard: React.FC<ReusableCardProps> = ({
  image,
  onClick,
  priceDetails = [],
  produtId,
  title,
}) => (
  <StyledCard>
    <Wrapper>
      <ActionArea onClick={onClick}>
        <Image
          src={image.url}
          alt={image.alternativeText}
          loader={strapiImageLoader}
          fill
        />
      </ActionArea>
    </Wrapper>
    <Content>
      <CardTitle>{title}</CardTitle>
      <CardPrice>{formatPrice(priceDetails[0]?.value)}</CardPrice>
      <QuantityBox>
        {priceDetails.map((priceDetail, index) => (
          <ProductLabel
            key={`${produtId}-price-detail-${index}`}
            htmlFor={`${produtId}-price-detail-${index}`}
          >
            <ProductInput
              name={`quantityOf${produtId}`}
              id={`${produtId}-price-detail-${index}`}
              type="radio"
            />
            1 x {formatPrice(priceDetail.value)}
          </ProductLabel>
        ))}
      </QuantityBox>
      <CartButton>
        AGREGAR <AddToCartIcon />
      </CartButton>
    </Content>
  </StyledCard>
);

const CardImages = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const ActionArea = styled(CardActionArea)`
  height: 100%;
  aspect-ratio: 1;

  &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight {
    opacity: 0.13;
  }
`;

const Wrapper = styled.div`
  padding: 12px 12px 0;
  height: fit-content;

  @media (min-width: 600px) {
    padding: 18px 18px 0;
  }
`;

const CardTitle = styled.p`
  width: 100%;
  height: fit-content;
  font-size: var(--md);
  text-align: center;
  line-height: 1;

  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding: 4px 12px 12px !important;
  font-family: var(--font-abnormal-6);
  color: var(--secondary);

  @media (min-width: 600px) {
    padding: 7px 18px 12px !important;
    gap: 10px;
  }
`;

const CardPrice = styled.p`
  display: inline-block;
  text-align: center;
  margin-top: -6px;
  padding: 0 10px;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--primary);

  @media (min-width: 600px) {
    padding: 0 20px;
  }
`;

const ProductInput = styled.input`
  position: absolute;
  width: 0;
  opacity: 0;
  margin: 0;
  pointer-events: none;
`;

const ProductLabel = styled.label`
  position: relative;
  background-color: var(--gray);
  font-size: var(--xxs);
  padding: 0 6px;
  border-radius: 9px;
  color: var(--regular-text);

  &:has(input:checked) {
    background-color: var(--secondary);
    color: white;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    padding: 0 10px;
    font-size: var(--xs);
  }
`;

const CartButton = styled.button`
  display: flex;
  width: 82%;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 4px 8px;
`;

const AddToCartIcon = styled(ShoppingCartIcon)`
  font-size: 22px;
  margin-left: 8px;
`;

const QuantityBox = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4px;
  width: 100%;

  & label:last-child {
    grid-column: 1/3;
  }
`;

const StyledCard = styled(Card)`
  display: grid;
  grid-template-rows: min-content auto;
  min-width: 172px;
  max-width: 172px;
  height: 99%;
  background-color: var(--white);

  @media (min-width: 600px) {
    min-width: 250px;
    max-width: 250px;
  }
`;

export default ReusableCard;
