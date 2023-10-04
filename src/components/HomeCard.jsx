import Card from '@mui/material/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingBagOutlined';import CardContent from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomeCard({category, drag, distance, type}) {
  const navigate = useNavigate()
  const [allowClick, setAllowClick] = useState(true)
  const customId = category.slug
  
  const handleClick = () => {
    allowClick?navigate(`category/${category.slug}`):null
  }
  const handleMove = () => {
    if(drag){
      distance>100?setAllowClick(false):setAllowClick(true)
    }else{setAllowClick(true)}
  }

  switch (type) {
    case 'Categorias':
      return(
        <CategoryCard 
          category={category} 
          handleMove={handleMove} 
          handleClick={handleClick}
        />
      )
    case 'Destacados':
      return(
        <ProductCard 
          customId={customId}
          category={category} 
          handleMove={handleMove} 
          handleClick={handleClick}
        />
      )

  }

}

function CategoryCard ({category, handleMove, handleClick}) {

  return(
    <>
      <StyledCard onClick={handleClick} onMouseMove={handleMove}>
          <ActionArea>
            <CardImages
              component='img'
        <StyledCard onClick={handleClick} onMouseMove={handleMove}>
          <ActionArea>
            <CardImages
              component="img"
              image={category.image}
              alt={category.slug}
            />
            <CardTitle className='Category--card-title'>
              <p> {category.title} </p>
            </CardTitle>
          </ActionArea>
        </StyledCard>
    </>
  )
}

function ProductCard ({customId, category, handleMove, handleClick}) {
  return(
    <>
          <StyledCardF onMouseMove={handleMove}>
            <WrapperF>
              <ActionAreaF onClick={handleClick}>
                  <CardImagesF
                    component='img'
                    image={category.image}
                    alt={category.slug}
                  />
              </ActionAreaF>
            </WrapperF>
            <CardContentF>
              <CardTitleF> {category.title} </CardTitleF>
              <CardPrice>$ 16.000</CardPrice>
              <QuantityBox>
                <ProductLabel htmlFor={`x1${customId}`}>1 x $ 16.000
                  <ProductInput 
                    name={`quantityOf${customId}`} 
                    id={`x1${customId}`} 
                    type='radio' 
                  />
                </ProductLabel>
                <ProductLabel htmlFor={`x2${customId}`}>2 x $28.000
                  <ProductInput 
                    name={`quantityOf${customId}`} 
                    id={`x2${customId}`} 
                    type='radio' 
                  />
                </ProductLabel>
                <ProductLabel htmlFor={`x12${customId}`}>12 x $ 108.000
                  <ProductInput 
                    name={`quantityOf${customId}`} 
                    id={`x12${customId}`} 
                    type='radio' 
                  />
                </ProductLabel>
              </QuantityBox>
              <CartButton>AGREGAR <AddToCartIcon/></CartButton>
            </CardContentF>
          </StyledCardF>
        </>
  )
}

const CardImages = styled(CardMedia)`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const CardTitle = styled(CardContent)`
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 0;
    
    width: 100%;
    height: 100%;
    max-height: 15%;
    padding: 0;
    
    background-color: rgb(255 255 255 / 0.3) ;
    backdrop-filter: blur(2px);
    
    font-family: 'Abnormal6';
    color: var(--secondary);
    
    transition: max-height .3s;
`
const StyledCard = styled(Card)`
  min-width: 172rem;
  height: 99%;
  background-color: transparent;
  scroll-snap-align: center;
      )
    case 'Destacados':
      return(
        <>
          <StyledCardF onClick={handleClick} onMouseMove={handleMove}>
            <WrapperF>
              <ActionArea>
                  <CardImages
                    component="img"
                    image={category.image}
                    alt={category.slug}
                  />
              </ActionArea>
            </WrapperF>
            <CardContentF>
              <CardTitleF> {category.title} </CardTitleF>
            </CardContentF>
          </StyledCardF>
        </>
        
      )

  }

}

const CardImages = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CardTitle = styled(CardContent)`
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 100%;
  max-height: 15%;
  padding: 0;

  background-color: rgb(255 255 255 / 0.3) ;
  backdrop-filter: blur(2px);

  font-family: 'Abnormal6';
  color: var(--secondary);

  transition: max-height .3s;
`

const StyledCard = styled(Card)`
  min-width: 172rem;
  height: 100%;
  background-color: transparent;
  scroll-snap-align: center;
  
  &:hover .Category--card-title {
    max-height: 20%;
  }
  
  @media (min-width: 600px) {
    min-width: 250rem;
  }
`
const ActionArea = styled(CardActionArea)`
    height: 100%;

    &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight{
      opacity: 0.08;
    }
`

const CardImagesF = styled(CardImages)`
  border-radius: 4px;
`
const WrapperF = styled.div`
  padding: 12rem 12rem 0;
  height: fit-content;
  @media (min-width: 600px) {
    padding: 18rem 18rem 0;
  }
`
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
 `
const CardContentF = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  height: 100%;
  padding: 4rem 12rem 12rem !important;
  font-family: 'Abnormal6';
  color: var(--secondary);

  @media (min-width: 600px) {
    padding: 7rem 18rem 12rem !important;
    gap: 10rem;
  }
`
const CardPrice = styled.p`
  display: inline-block;
  text-align: center;
  margin-top: -6rem;
  padding: 0 10rem;
  border-radius: 12rem;
  color: var(--white);
  background-color: var(--primary );
  @media (min-width: 600px) {
    padding: 0 20rem;
  }
`
const ActionAreaF = styled(ActionArea)`
  height: none;
  aspect-ratio: 1;
    
    &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight{
      opacity: 0.08;
    }
`
const ProductInput = styled.input`
  position: absolute;
  width: 0;
  opacity: 0;
  margin: 0;
  pointer-events: none;
`
const ProductLabel = styled.label`
  position: relative;
  background-color: var(--gray);
  font-size: var(--xxs);
  padding: 0 6rem;
  border-radius: 9rem;
  color: var(--regular-text);

  &:has(input:checked){
    background-color: var(--secondary);
    color: white
  }

  &:hover{
    cursor: pointer;
  }

  @media (min-width: 600px) {
   padding: 0 10rem;
   font-size: var(--xs) 
  }
`
const CartButton = styled.button`
  display: flex;
  width: 82%;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 4rem 8rem;
`
const AddToCartIcon = styled(ShoppingCartIcon)`
  font-size: 22rem;
  margin-left: 8rem;
` 
const QuantityBox = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  width: 100%;

  & label:last-child {
    grid-column: 1/3;
  }
`
const StyledCardF = styled(StyledCard)`
  display: grid;
  grid-template-rows: min-content auto;
  background-color: var(--white);
  max-width: 172rem;
  @media (min-width: 600px) {
    max-width: 250rem;
  }
`

const ActionArea = styled(CardActionArea)`
  height: 100%;

  &:hover .css-1v2exvi-MuiCardActionArea-focusHighlight{
    opacity: 0.08;
  }
`

const WrapperF = styled.div`
  padding: 12rem ;
`

const CardTitleF = styled.p`
  height: fit-content;
  width: 100%;
  text-align: center;
`
const StyledCardF = styled(StyledCard)`
  display: grid;
  grid-template-rows: 70% 30%;
  background-color: var(--white);
`
const CardContentF = styled(CardContent)`
  display: flex;
  height: 100%;
  background-color: var(--primary);
  font-family: 'Abnormal6';
  color: var(--secondary);
  padding: 4rem 0 0 !important;
`

