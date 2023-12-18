import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import HomeCard from "./HomeCard";
import categories from "../data/categories";

export default function SliderPanel ({ type }) {
    const [drag, setDrag] = useState(false)
    const [autoSlide, setAutoSlide] = useState(true)
    const [startX, setStartX] = useState()
    const [scrollLeft, setScrollLeft] = useState()
    const [distance, setDistance] = useState()
    const panelRef = useRef(null)

    let index = 1
    let sliderId

    /* eslint-disable */
    useEffect(()=>{
        if(autoSlide && !drag){
            startSlider()
        }else{
            stopSlider()
        }
        return () => clearInterval(sliderId)
    }, [drag, autoSlide])
    /* eslint-enable */

    const startSlider = () => {
        sliderId = setInterval(()=>{
            if(panelRef.current){
                if(index < panelRef.current.childNodes.length){
                    index++
                    panelRef.current.scrollBy(100, 0)
                }else {
                    index = 1
                    panelRef.current.scrollTo(0, 0)
                }
            }
        }, 4000)
    }
    const stopSlider = () => {
        clearInterval(sliderId)
    }
    
    const initDrag = (e) => {
        setAutoSlide(false)
        stopSlider()
        e.target.classList.remove('scroll--mandatory', 'scroll--smooth')
        setDrag(true)
        setStartX(e.pageX - panelRef.current.offsetLeft)
        setScrollLeft(panelRef.current.scrollLeft)
    }
    const finaliceDrag = (e) => {
        e.target.classList.add('scroll--mandatory', 'scroll--smooth')
        setDrag(false)
        setAutoSlide(true)
    }
    const handleDrag = (e) => {
        e.preventDefault()
        if(!drag){return}
        const x = e.pageX - panelRef.current.offsetLeft
        const walk = (x - startX)
        setDistance(Math.abs(walk))
        panelRef.current.scrollLeft = scrollLeft - walk
    }
    
    return(
        <Panel type={type}>
            <Title>{type}</Title>
            <Wrapper 
                onPointerLeave={()=>{setAutoSlide(true)}} 
                onPointerEnter={()=>{setAutoSlide(false)}}
            >
                <CategoryPanelBox className="scroll--mandatory scroll--smooth" type={type}
                    ref={panelRef}
                    onPointerDown={initDrag}
                    onPointerUp={finaliceDrag}
                    onTouchEnd={finaliceDrag}
                    // onPointerLeave={finaliceDrag}
                    onPointerMove={handleDrag}
                >
                    {categories.map((category)=>(<HomeCard type={type} distance={distance} drag={drag} key={category.slug} category={category} setAutoSlide={setAutoSlide}/>))}
                </CategoryPanelBox>
            </Wrapper>
        </Panel>
    )
}

const CategoryPanelBox = styled.div`
    display: flex;
    gap: 15px;
    height: ${({type})=>type==='Categorias'?'234px':'320px'};
    
    overflow: scroll;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
    
    &:active{
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
    @media (min-width: 600px){
        height: ${({type})=>type==='Categorias'?'340px':'400px'};
        gap: 30px;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 15px 15px;
    
    @media (min-width: 600px) {
        padding: 0 30px 30px;
    }
`

const Title = styled.h2`
    font-family: var(--font-abnormal-n);
    font-size: var(--xl);
    text-align: center;
    padding: 0;
    color: var(--secondary);
    
    @media (min-width: 600px) {
        padding: 8px 0;
    }
`
const Panel = styled.div`
    background-color: ${({type})=>(type==='Categorias'?'var(--white)':'var(--bg)')};
`