import styled from "@emotion/styled"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/logo-circulo.png'
import ListIcon from '@mui/icons-material/NavigateNext';
import wave from '../assets/wave.png'

export default function Footer ({mobMenu}) {
    return(
        <StyledFooter mobMenu={mobMenu}>
            <Wave src={wave} alt="wave footer image" />
            <FooterStart className="arriba">
                <FooterPanel className="panel">
                    <FooterLogo src={logo} alt="Ananda Logo" className="logo" />
                    <Slogan className="slogan">Somos un taller de cosmética artesanal realizada con ingredientes naturales, de origen vegetal, sin sustancias químicas nocivas para la piel y el medio ambiente.</Slogan>
                    <div className="gap10">
                        <a target="blank" href="https://wa.me/+573053402728"><SocialMediaIcon/></a>
                        <a target="blank" href="https://www.instagram.com/anandajaboneriartesanal/"><SocialMediaIcon as={InstagramIcon} /></a>
                    </div>
                </FooterPanel>
                <FooterPanel className="panel">
                    <div>
                        <FooterAction> <ListIcon/> Quienes somos</FooterAction>
                        <FooterAction> <ListIcon/> Quiero ser distribuidor</FooterAction>
                    </div>
                        <Contact>Contactanos</Contact>
                        <p>juansw03@gmail.com</p>
                        <p>+57 305 340 2728</p>
                </FooterPanel>
                <FooterPanel className="panel">
                    <div>
                        <FooterAction> <ListIcon/> Politica de cambios y devoluciones</FooterAction>
                        <FooterAction> <ListIcon/> Preguntas frecuentes</FooterAction>
                        <FooterAction> <ListIcon/> Politica de envios</FooterAction>
                    </div>
                </FooterPanel>
            </FooterStart>
            <FooterEnd className="abajo">Desarrollado por:&nbsp;<a href="https://github.com/J-HernandezM">Juan Jose Hernandez</a></FooterEnd>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: .3s all;
    transform: translateY(${props=>props.mobMenu?'300rem':'108rem'});
    @media (min-width: 650px) {
        transform: translateY(172rem);
    }
    `
const FooterStart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20rem;
    padding: 0 20rem;
    font-family: 'AbnormalN';
    color: var(--regular-text);
    background-color: var(--primary-light);

    & .panel:nth-of-type(1), .panel:nth-of-type(2){
        border-bottom: 1px solid var(--primary-strong);
        padding-bottom: 20rem;
    }

    @media (min-width: 650px) {
        flex-direction: row;
        gap: 0;
        padding: 0 30rem;
        justify-content: space-between;
        & .panel:nth-of-type(1), .panel:nth-of-type(2){
            border: none;
            padding-bottom: 0;
        }
        & .panel:nth-of-type(2), .panel:nth-of-type(3) {
            border-left: 1px solid var(--secondary);
            justify-content: center;
            height: 180rem;
            padding: 0 10rem;
        }
    }
`
const FooterEnd = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--primary-strong);
    color: var(--white);

    & a {
        color: var(--white);
        font-family: 'Abnormal6'
    }
`
const FooterPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & div p:last-child{
        margin-bottom: 10rem;
    }

    @media (min-width: 650px) {
        flex-grow: 1;
    }
`
const FooterLogo = styled.img`
    position: relative;
    z-index: 2;
    width: 50%;
    max-width: 310rem;
    min-width: 250rem;
    @media (min-width: 650px) {
        margin-top: -80rem;
    }
`

const SocialMediaIcon = styled(WhatsAppIcon)`
    font-size: 34rem;
    color: var(--secondary);
    margin-top: 10rem;
    transform: scale(1);
    transition: transform .3s;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`
const Contact = styled.p`
    font-family: 'Abnormal6';
    font-size: var(--lg);
`
const FooterAction = styled.p`
    display: flex;
    font-family: 'Abnormal6';
    align-items: center;
    &:hover{
        cursor: pointer;
        color: var(--secondary);
    }
`
const Wave = styled.img`
    position: relative;
    top: 2rem;
    max-height: 250rem;
`
const Slogan = styled.p`
    max-width: 410rem;
    min-width: 310rem;
    margin-top: -20rem;
`