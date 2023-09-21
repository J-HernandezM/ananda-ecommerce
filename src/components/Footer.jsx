import styled from "@emotion/styled"

export default function Footer ({mobMenu}) {
    return(
        <StyledFooter mobMenu={mobMenu}>
            Este es el footer
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    border: 1px solid red;
    transition: .3s all;
  transform: translateY(${props=>props.mobMenu?'300rem':'108rem'});
  @media (min-width: 650px) {
    transform: translateY(172rem);}
`