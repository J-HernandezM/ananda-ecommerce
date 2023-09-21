import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomeCard({category, drag, distance, type}) {
  const navigate = useNavigate()
  const [allowClick, setAllowClick] = useState(true)
  
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

