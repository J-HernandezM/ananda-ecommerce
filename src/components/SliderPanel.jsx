
import { useRef, useState, useEffect } from "react";
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import HomeCard from "./HomeCard";
import categories from "../data/categories";

export default function SliderPanel ({ type }) {
    const [drag, setDrag] = useState(false)
    const [startX, setStartX] = useState()
    const [scrollLeft, setScrollLeft] = useState()
    const [distance, setDistance] = useState()
    const panelRef = useRef(null)

    let index = 1
    let sliderId

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{startSlider()}, [])

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
        }, 3000)
    }
    const stopSlider = () => {
        clearInterval(sliderId)
    }

    const initDrag = (e) => {
        e.target.classList.remove('scroll--mandatory')
    const initDrag = (e) => {
        setDrag(true)
        setStartX(e.pageX - panelRef.current.offsetLeft)
        setScrollLeft(panelRef.current.scrollLeft)
    }
    const finaliceDrag = (e) => {
        e.target.classList.add('scroll--mandatory')
        setDrag(false)
    }
    const finaliceDrag = () => setDrag(false)
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
            <Wrapper onMouseLeave={startSlider} onMouseEnter={stopSlider}>
                <CategoryPanelBox className="scroll--mandatory scroll--smooth" type={type}

    return(
        <Panel type={type}>
            <Title>{type}</Title>
            <Wrapper>
                <CategoryPanelBox 
                    ref={panelRef}
                    onMouseDown={initDrag}
                    onMouseUp={finaliceDrag}
                    onMouseLeave={finaliceDrag}
                    onMouseMove={handleDrag}
                >
                    {categories.map((category)=>(<HomeCard type={type} distance={distance} drag={drag} key={category.slug} category={category}/>))}
                </CategoryPanelBox>
            </Wrapper>
        </Panel>
    )
}

const CategoryPanelBox = styled.div`
    display: flex;
    gap: 15rem;
    height: ${({type})=>type==='Categorias'?'234rem':'320rem'};
    height: 234rem;
    
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
        height: ${({type})=>type==='Categorias'?'340rem':'400rem'};
        height: 340rem;
        gap: 30rem;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 15rem 15rem;
    
    @media (min-width: 600px) {
        padding: 0 30rem 30rem;
    }
`

const Title = styled.h2`
    font-family: 'AbnormalN';
    font-size: var(--xl);
    text-align: center;
    padding: 0;
    color: var(--secondary);
    
    @media (min-width: 600px) {
        padding: 8rem 0;
    }
`
const Panel = styled.div`
    background-color: ${({type})=>(type==='Categorias'?'var(--white)':'var(--bg)')};
`