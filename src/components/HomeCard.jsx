import Card from '@mui/material/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeCard({
  category,
  drag,
  distance,
  type,
  setAutoSlide,
}) {
  const router = useRouter();
  const [allowClick, setAllowClick] = useState(true);
  const customId = category.slug;

  const handleClick = () => {
    allowClick ? router.push(`category/${category.slug}`) : null;
  };
  const handleMove = () => {
    if (drag) {
      distance > 100 ? setAllowClick(false) : setAllowClick(true);
    } else {
      setAllowClick(true);
    }
  };

  switch (type) {
    case 'Categorias':
      return (
        <CategoryCard
          category={category}
          handleMove={handleMove}
          handleClick={handleClick}
        />
      );
    case 'Destacados':
      return (
        <ProductCard
          customId={customId}
          category={category}
          handleMove={handleMove}
          handleClick={handleClick}
          setAutoSlide={setAutoSlide}
        />
      );
  }
}

function CategoryCard({ category, handleMove, handleClick }) {
  return (
    <>
      <StyledCard onClick={handleClick} onMouseMove={handleMove}>
        <ActionArea>
          <CardImages
            component="img"
            image={category.image}
            alt={category.slug}
          />
          <CardTitle className="Category--card-title">
            <p> {category.title} </p>
          </CardTitle>
        </ActionArea>
      </StyledCard>
    </>
  );
}

function ProductCard({
  customId,
  category,
  handleMove,
  handleClick,
  setAutoSlide,
}) {
  const disableAutoSlide = () => {
    setAutoSlide(false);
  };

  return (
    <>
      <StyledCardF onMouseMove={handleMove}>
        <WrapperF>
          <ActionAreaF onClick={handleClick}>
            <CardImagesF
              component="img"
              image={category.image}
              alt={category.slug}
            />
          </ActionAreaF>
        </WrapperF>
        <CardContentF>
          <CardTitleF> {category.title} </CardTitleF>
          <CardPrice>$ 16.000</CardPrice>
          <QuantityBox>
            <ProductLabel onClick={disableAutoSlide} htmlFor={`x1${customId}`}>
              1 x $ 16.000
              <ProductInput
                name={`quantityOf${customId}`}
                id={`x1${customId}`}
                type="radio"
              />
            </ProductLabel>
            <ProductLabel onClick={disableAutoSlide} htmlFor={`x2${customId}`}>
              2 x $28.000
              <ProductInput
                name={`quantityOf${customId}`}
                id={`x2${customId}`}
                type="radio"
              />
            </ProductLabel>
            <ProductLabel onClick={disableAutoSlide} htmlFor={`x12${customId}`}>
              12 x $ 108.000
              <ProductInput
                name={`quantityOf${customId}`}
                id={`x12${customId}`}
                type="radio"
              />
            </ProductLabel>
          </QuantityBox>
          <CartButton>
            AGREGAR <AddToCartIcon />
          </CartButton>
        </CardContentF>
      </StyledCardF>
    </>
  );
}

const CardImages = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardTitle = styled(CardContent)`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 100%;
  max-height: 15%;
  padding: 0;

  background-color: rgb(255 255 255 / 0.3);
  backdrop-filter: blur(2px);

  font-family: var(--font-abnormal-6);
  color: var(--secondary);

  transition: max-height 0.3s;
`;
const StyledCard = styled(Card)`
  min-width: 172px;
  height: 99%;
  background-color: transparent;
  scroll-snap-align: center;
  &:hover .Category--card-title {
    max-height: 20%;
  }

  @media (min-width: 600px) {
    min-width: 250px;
  }
`;
const ActionArea = styled(CardActionArea)`
  height: 100%;

  &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight {
    opacity: 0.13;
  }
`;

const CardImagesF = styled(CardImages)`
  border-radius: 4px;
`;
const WrapperF = styled.div`
  padding: 12px 12px 0;
  height: fit-content;
  @media (min-width: 600px) {
    padding: 18px 18px 0;
  }
`;
const CardTitleF = styled.p`
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
const CardContentF = styled(CardContent)`
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
const ActionAreaF = styled(ActionArea)`
  aspect-ratio: 1;

  &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight {
    opacity: 0.13;
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
const StyledCardF = styled(StyledCard)`
  display: grid;
  grid-template-rows: min-content auto;
  background-color: var(--white);
  max-width: 172px;
  @media (min-width: 600px) {
    max-width: 250px;
  }
`;
