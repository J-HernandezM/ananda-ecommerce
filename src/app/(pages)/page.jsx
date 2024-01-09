/** @jsxImportSource @emotion/react */
'use client';

import ImageSlider from '../../components/ImageSlider';
import SliderPanel from '../../components/SliderPanel';

const Homepage = () => (
  <>
    <ImageSlider />
    <SliderPanel type={'Categorias'} />
    <SliderPanel type={'Destacados'} />
  </>
);

export default Homepage;
