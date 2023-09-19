import CategoryCard from "./CategoryCard";
import styled from "@emotion/styled";
import categories from "../data/categories";

export default function CategoryPanel () {
    return(
        <Wrapper>
            <CategoryPanelBox>
                        {categories.map((category)=>(<CategoryCard key={category.slug} category={category}/>))}
                        {categories.map((category)=>(<CategoryCard key={category.slug} category={category}/>))}
            </CategoryPanelBox>
        </Wrapper>
    )
}

const CategoryPanelBox = styled.div`
    display: flex;
    position: relative;
    gap: 30rem;

    padding: 30rem;
    height: 400rem;
    margin: 0 auto;

    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }

    /* @media (min-width: 1400px) {
        justify-content: center;
    } */
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--white);
`