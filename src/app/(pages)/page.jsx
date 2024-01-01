'use client';
import ImageSlider from '../../components/ImageSlider';
import SliderPanel from '../../components/SliderPanel';
import { withProducts } from '../../context/products';

const Homepage = () => (
  <>
    <ImageSlider />
    <SliderPanel type={'Categorias'} />
    <SliderPanel type={'Destacados'} />
  </>
);

export default withProducts(Homepage);
