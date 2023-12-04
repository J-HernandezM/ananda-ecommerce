import tienda from '../assets/h-tienda.jpg'
import limpieza from '../assets/h-limpieza.jpg'
import tratamientos from '../assets/h-tratamientos.jpg'
import mascarillas from '../assets/h-mascarillas.jpg'
import unguentos from '../assets/h-unguentos.jpg'



const categories = [
    {
      title: 'Limpieza facial',
      slug: 'limpieza-facial',
      image: limpieza.src
    },
    {
      title: 'Tratamientos',
      slug: 'tratamientos',
      image: tratamientos.src
    },
    {
      title: 'Cremas y unguentos',
      slug: 'cremas-y-unguentos',
      image: unguentos.src
    },
    {
      title: 'Mascarillas',
      slug: 'mascarillas',
      image: mascarillas.src
    },
    {
      title: 'Tienda',
      slug: 'all',
      image: tienda.src
    }
]

export default categories