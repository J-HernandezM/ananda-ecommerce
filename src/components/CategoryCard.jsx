import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CategoryCard({category, drag, distance}) {
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

  return (
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
  );
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

  background-color: rgb(255 255 255 / 0.3) !important;
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