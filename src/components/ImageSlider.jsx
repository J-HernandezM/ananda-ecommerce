import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import tienda from '../assets/c-tienda.jpg'
import limpieza1 from '../assets/c-limpieza1.jpg'
import tratamientos from '../assets/c-tratamientos.jpg'
import mascarillas from '../assets/c-mascarillas.jpg'
import unguentos from '../assets/c-unguentos.jpg'
import limpieza2 from '../assets/c-limpieza2.jpg'

const images = [
    {
        src: tienda,
        slug: 'all'
    },
    {
        src: limpieza1,
        slug: 'limpieza-facial'
    },
    {
        src: tratamientos,
        slug: 'tratamientos'
    },
    {
        src: mascarillas,
        slug: 'mascarillas'
    },
    {
        src: unguentos,
        slug: 'cremas-y-unguentos'
    },
    {
        src: limpieza2,
        slug: 'limpieza-facial'
    },

]
export default function ImageSlider() {
    const navigate = useNavigate()

    return(
        <>
            <ImageBox>
                {images.map((image)=> <SliderImg key={image.src} src={image.src} onClick={()=>{navigate(`${image.slug}`)}}/>)}
                <NavigateControls>
                    <Icon />                
                    <Icon as={NavigateNextIcon} />                
                </NavigateControls>
            </ImageBox>
        </>
    )
}

const ImageBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 250rem;
    overflow: scroll;
    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (min-width: 650px) {
        height: 500rem
    }
`
const SliderImg = styled.img`
    min-width: 100%;
    object-fit: cover;
    scroll-snap-align: center;
`
const NavigateControls = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
    justify-content: center;
`
const Icon = styled(NavigateBeforeIcon)`
    
`
