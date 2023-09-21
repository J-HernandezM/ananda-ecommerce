import SliderPanel from "../components/SliderPanel";
import ImageSlider from "../components/ImageSlider";


export default function Homepage () {
    return(
        <>
            <ImageSlider />
            <SliderPanel type = {'Categorias'} />
            <SliderPanel type = {'Destacados'}/>
        </>
    )
}

