import { useRef, useState } from "react";
import styled from "@emotion/styled";
import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

export default function CategoryPanel () {
    const [drag, setDrag] = useState(false)
    const [startX, setStartX] = useState()
    const [scrollLeft, setScrollLeft] = useState()
    const panelRef = useRef(null)


    const initDrag = (e) => {
        setDrag(true)
        setStartX(e.pageX - panelRef.current.offsetLeft)
        setScrollLeft(panelRef.current.scrollLeft)
    }
    const finaliceDrag = () => setDrag(false)
    const handleDrag = (e) => {
        e.preventDefault()
        if(!drag){return}
        const x = e.pageX - panelRef.current.offsetLeft
        const walk = x - startX
        panelRef.current.scrollLeft = scrollLeft - walk
    }

    return(
        <Panel>
            <Title>Categorias</Title>
            <Wrapper>
                <CategoryPanelBox 
                    ref={panelRef}
                    onMouseDown={initDrag}
                    onMouseUp={finaliceDrag}
                    onMouseLeave={finaliceDrag}
                    onMouseMove={(handleDrag)}
                >
                    {categories.map((category)=>(<CategoryCard key={category.slug} category={category}/>))}
                    {categories.map((category)=>(<CategoryCard key={category.slug} category={category}/>))}
                </CategoryPanelBox>
            </Wrapper>
        </Panel>
    )
}

const CategoryPanelBox = styled.div`
    display: flex;
    gap: 30rem;
    height: 340rem;
    
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
    `

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 30rem 30rem;
    `

const Title = styled.h2`
    font-family: 'AbnormalN';
    font-size: var(--xl);
    text-align: center;
    padding: 8rem 0;
`

const Panel = styled.div`
    background-color: var(--white);
`
