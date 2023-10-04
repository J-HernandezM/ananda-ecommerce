import styled from "@emotion/styled"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/logo-circulo.png'

export default function Footer ({mobMenu}) {
    return(
        <StyledFooter mobMenu={mobMenu}>
            <FooterStart className="arriba">
                <FooterPanel className="left">
                    <FooterLogo src={logo} alt="Ananda Logo" className="logo" />
                    <p className="slogan">Somos un taller de cosmética artesanal realizada con ingredientes naturales, de origen vegetal, sin sustancias químicas nocivas para la piel y el medio ambiente.</p>
                    <div className="socialmedia">
                        <WhatsAppIcon fontSize="80px"/>
                        <InstagramIcon/>
                    </div>
                </FooterPanel>
                <FooterPanel className="center">
                    <div>
                        <p>Quienes somos</p>
                        <p>Quiero ser distribuidor</p>
                        <p>Contactanos</p>
                    </div>
                    <div>
                        <p>juansw03@gmail.com</p>
                        <p>+57 305 340 2728</p>
                    </div>
                </FooterPanel>
                <FooterPanel className="right">
                    <p>Preguntas frecuentes</p>
                    <p>Politica de envios</p>
                    <p>Politica de cambios y devoluciones</p>
                </FooterPanel>
            </FooterStart>
            <FooterEnd className="abajo">Desarrollado por <a href="https://github.com/J-HernandezM">Juan Jose Hernandez</a></FooterEnd>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-light);
    transition: .3s all;
    transform: translateY(${props=>props.mobMenu?'300rem':'108rem'});
    @media (min-width: 650px) {
        transform: translateY(172rem);
    }
`
const FooterStart = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20rem;
    gap: 20rem;
`
const FooterEnd = styled.div`
    
    `
const FooterPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid blue; */
`
const FooterLogo = styled.img`
    width: 50%;
    max-width: 310rem;
`