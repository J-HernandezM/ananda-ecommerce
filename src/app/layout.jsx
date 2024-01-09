import RootStyleRegistry from './emotion';
import * as fonts from './fonts';

export const metadata = {
  title: 'Ananda Jaboneria Artesanal',
  description:
    'Somos un taller de cosmética artesanal realizada con ingredientes naturales, de origen vegetal, sin sustancias químicas nocivas para la piel y el medio ambiente. Nuestro objetivo es crear un producto hecho en casa, hecho a mano, hecho con amor, con ingredientes naturales altamente hidratantes, humectantes, nutritivos, reparadores y terapeuticos que sean amigables con el medio ambiente. Utilizamos aceites vegetales prensados en frio, extractos de plantas, macerados, fragancias de aceites esenciales y aditivos como cafe, cacao, avena, pulpas de fruta, semillas secas y leches vegetales de procedencia organica, entre otros. Estamos comprometidos con el bienestar y la salud de la piel, entregando productos naturales de alta calidad y que brindan salud y belleza',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
      </head>
      {/* TODO: merge abnormal into one archive with differents weights, define wich other fonts use */}
      <body
        className={`
            ${fonts.abnormal.variable}
            ${fonts.abnormal6.variable}
            ${fonts.abnormalN.variable}
            ${fonts.abnormalB.variable}
            ${fonts.innova.variable}
            ${fonts.myriad.variable}
            ${fonts.selfie.variable}
            ${fonts.vogue.variable}
          `}
      >
        <RootStyleRegistry options={{ enableCssLayer: true }}>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
