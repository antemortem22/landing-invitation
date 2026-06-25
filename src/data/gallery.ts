import storyImage from '../assets/gallery/gallery-story.svg'
import celebrationImage from '../assets/gallery/gallery-celebration.svg'
import nurseryImage from '../assets/gallery/gallery-nursery.svg'
import type { GalleryItem } from '../types'

export const galleryItems: GalleryItem[] = [
  {
    id: 'story',
    image: storyImage,
    title: 'Nuestra historia',
    description: 'Pequeños recuerdos llenos de amor y dulzura.',
    alt: 'Placeholder para foto de la historia familiar de Olivia',
  },
  {
    id: 'celebration',
    image: celebrationImage,
    title: 'La celebración',
    description: 'La mesa y los detalles soñados para compartir juntos.',
    alt: 'Placeholder para foto de la celebracion del baby shower',
  },
  {
    id: 'nursery',
    image: nurseryImage,
    title: 'El espacio de Olivia',
    description: 'Un rinconcito delicado preparado con mucha ternura.',
    alt: 'Placeholder para foto del espacio de Olivia',
  },
]
