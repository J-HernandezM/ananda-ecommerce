import styled from "@emotion/styled"
import Link from "next/link"


export default function MobileMenu({categories, mobMenu ,setMobMenu}) {
    return(
        <MobileWrapper mobMenu={mobMenu}>
            {categories.map((categorie)=>
                (<MobCategory 
                    onClick={()=>{setMobMenu(!mobMenu)}} 
                    href={`/category/${categorie.slug}`} 
                    key={categorie.slug}
                >
                    {categorie.title}
                </MobCategory>)    
            )}
        </MobileWrapper>
    )
}

const MobileWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;

    width: 100%;
    padding: 20px;
    background-color: var(--primary-strong);

    transition: .3s all ease;
    transform: translateY(${props => props.mobMenu?'0':'-50%'});
    opacity: ${props => props.mobMenu?'100%':'0%'};
    visibility: ${props => props.mobMenu?'visible':'hidden'};

    @media (min-width: 650px) {
        display: none;
    }
`
const MobCategory = styled(Link)`
    color: var(--white);
    font-family: var(--font-abnormal-n);
    transition: transform .3s;

    &:hover{
        color: var(--primary);
    }
`


