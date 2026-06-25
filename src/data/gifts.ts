import strollerImage from '../assets/gifts/gift-stroller.svg'
import swaddleImage from '../assets/gifts/gift-swaddle.svg'
import nurseryImage from '../assets/gifts/gift-nursery.svg'
import monitorImage from '../assets/gifts/gift-monitor.svg'
import bottleImage from '../assets/gifts/gift-bottle.svg'
import bathImage from '../assets/gifts/gift-bath.svg'
import type { GiftItem } from '../types'

export const initialGifts: GiftItem[] = [
  {
    id: 'crib',
    image: nurseryImage,
    name: 'Cuna convertible',
    description: 'Madera blanca con detalles nordicos, incluye colchon y protector.',
    category: 'Habitacion',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/cuna' }],
    reserved: false,
  },
  {
    id: 'stroller',
    image: strollerImage,
    name: 'Cochecito de paseo',
    description: 'Plegable y ultraliviano, color beige. Apto desde recien nacido.',
    category: 'Paseo',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/cochecito' }],
    reserved: true,
  },
  {
    id: 'outfit',
    image: swaddleImage,
    name: 'Set de ropa (0-3m)',
    description: 'Bodys de algodon organico en tonos pastel. Pack de 5 piezas.',
    category: 'Textiles',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/ropa' }],
    reserved: false,
  },
  {
    id: 'chair',
    image: nurseryImage,
    name: 'Silla de lactancia',
    description: 'Butaca ergonomica con apoyapies. Tapizado en velvet rosado.',
    category: 'Habitacion',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/silla' }],
    reserved: false,
  },
  {
    id: 'bath',
    image: bathImage,
    name: 'Banera + set de baño',
    description: 'Banera ergonomica con soporte y set de productos naturales.',
    category: 'Baño',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/banera' }],
    reserved: true,
  },
  {
    id: 'mobile',
    image: monitorImage,
    name: 'Movil musical',
    description: 'Nubes, estrellas y lunas en tela suave. Melodias relajantes incluidas.',
    category: 'Habitacion',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/mobile' }],
    reserved: false,
  },
  {
    id: 'bottles',
    image: bottleImage,
    name: 'Mamaderas anti-colicos',
    description: 'Set practico para los primeros meses, con diseño simple y delicado.',
    category: 'Alimentacion',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/mamaderas' }],
    reserved: false,
  },
  {
    id: 'blankets',
    image: swaddleImage,
    name: 'Mantas de muselina',
    description: 'Suaves, respirables y en colores delicados para el dia a dia.',
    category: 'Textiles',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/mantas' }],
    reserved: false,
  },
  {
    id: 'lamp',
    image: nurseryImage,
    name: 'Lampara para cuarto',
    description: 'Luz calida y suave para acompañar las noches de Olivia.',
    category: 'Habitacion',
    referenceLinks: [{ label: 'Ver producto', href: 'https://example.com/lampara' }],
    reserved: false,
  },
]
