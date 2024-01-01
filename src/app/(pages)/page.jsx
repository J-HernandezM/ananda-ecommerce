'use client';
import ImageSlider from '../../components/ImageSlider';
import SliderPanel from '../../components/SliderPanel';

export default function Homepage() {
  return (
    <>
      <ImageSlider />
      <SliderPanel type={'Categorias'} />
      <SliderPanel type={'Destacados'} />
    </>
  );
}
