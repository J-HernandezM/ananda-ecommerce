import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { Icon } from "../App";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import tienda from '../assets/c-tienda.jpg'
import limpieza1 from '../assets/c-limpieza1.jpg'
import tratamientos from '../assets/c-tratamientos.jpg'
import mascarillas from '../assets/c-mascarillas.jpg'
import unguentos from '../assets/c-unguentos.jpg'
import limpieza2 from '../assets/c-limpieza2.jpg'
import { useEffect, useRef } from "react";

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
    const imageBox = useRef()
    let index = 1
    let sliderId

    useEffect(
        ()=>{
            startSlider()
            if(imageBox.current){
                let firstClone = imageBox.current.firstChild.cloneNode()
                imageBox.current.append(firstClone)
            }
        }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

    const startSlider = () => {
        sliderId = setInterval(slideForward, 3000)
    }
    const stopSlider = () => {
        clearInterval(sliderId)
    }
    const slideForward = () => {
        if(imageBox.current){
            if(index < imageBox.current.childNodes.length){
                if(!imageBox.current.classList.contains('scroll--smooth')){
                    imageBox.current.classList.add('scroll--smooth')
                }
                index++
                imageBox.current.scrollBy(1, 0)
            }else {
                index = 1
                imageBox.current.classList.remove('scroll--smooth')
                imageBox.current.scrollTo(0, 0)
            }
        }
    }
    const slideBackwards = (e) => {
        if(index>1){
            index--
            e.target.closest('#nav-controls').previousElementSibling.scrollBy(-1, 0);
        }
    }
    const BlackIcon = styled(Icon)`
        position: absolute;
        top: 50%;
        right: 10px;
        color: var(--secondary);
        transform: translateY(-50%);
        transform-origin: center;
        padding: 0;
        font-size: 24px;
    &:hover{
        background-color: transparent;
        color: var(--secondary);
        transform: translateY(-50%) scale(1.5);
    }
`

    return(
        <Carrousel onMouseLeave={startSlider} onMouseEnter={stopSlider}>
            <ImageBox className="scroll--smooth" ref={imageBox}>
                {images.map((image)=> <SliderImg key={image.src} src={image.src} onClick={()=>{navigate(`category/${image.slug}`)}}/>)}
            </ImageBox>
            <div id='nav-controls'>
                <BlackIcon as={LeftIcon} onClick={slideBackwards} />                
                <BlackIcon as={NavigateNextIcon} onClick={slideForward}/>                
            </div>
        </Carrousel>
    )
}

const Carrousel = styled.div`
    position: relative;
`

const ImageBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 250px;
    overflow: scroll;
    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (min-width: 650px) {
        height: 500px
    }
`
const SliderImg = styled.img`
    min-width: 100%;
    object-fit: cover;
    scroll-snap-align: center;

    &:hover{
        cursor: pointer;
    }
`

const LeftIcon = styled(NavigateBeforeIcon)`
    left: 10px;
`