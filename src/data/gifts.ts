import strollerImage from '../assets/gifts/gift-stroller.svg'
import swaddleImage from '../assets/gifts/gift-swaddle.svg'
import nurseryImage from '../assets/gifts/gift-nursery.svg'
import monitorImage from '../assets/gifts/gift-monitor.svg'
import bottleImage from '../assets/gifts/gift-bottle.svg'
import bathImage from '../assets/gifts/gift-bath.svg'
import type { GiftItem } from '../types'

export const initialGifts: GiftItem[] = [
  {
    id: 'stroller',
    image: strollerImage,
    name: 'Cochecito liviano',
    description: 'Preferimos tonos neutros o rosa empolvado, ideal para paseos diarios.',
    category: 'Paseo',
    preferenceNote: 'Si es plegable y liviano, mejor.',
    referenceLinks: [
      { label: 'Ver referencia', href: 'https://example.com/cochecito' },
      { label: 'Ver opción 2', href: 'https://example.com/cochecito-2' },
    ],
    reserved: false,
  },
  {
    id: 'swaddles',
    image: swaddleImage,
    name: 'Mantas de muselina',
    description: 'Suaves, respirables y en colores delicados para el día a día.',
    category: 'Textiles',
    preferenceNote: 'Nos gustan los estampados florales o lisos en rosa claro.',
    referenceLinks: [
      { label: 'Ver ejemplo', href: 'https://example.com/muselina' },
    ],
    reserved: false,
  },
  {
    id: 'bath',
    image: bathImage,
    name: 'Set de baño',
    description: 'Toallón con capucha, cepillito suave y accesorios básicos.',
    category: 'Baño',
    referenceLinks: [
      { label: 'Ver referencia', href: 'https://example.com/bano' },
    ],
    reserved: true,
  },
  {
    id: 'bottles',
    image: bottleImage,
    name: 'Mamaderas anti-cólicos',
    description: 'Set práctico para los primeros meses, con diseño simple.',
    category: 'Alimentación',
    referenceLinks: [
      { label: 'Ver opción 1', href: 'https://example.com/mamadera-1' },
      { label: 'Ver opción 2', href: 'https://example.com/mamadera-2' },
    ],
    reserved: false,
  },
  {
    id: 'nursery-lamp',
    image: nurseryImage,
    name: 'Lámpara para cuarto',
    description: 'Luz cálida y suave para acompañar las noches de Olivia.',
    category: 'Habitación',
    preferenceNote: 'Nos encantan las formas delicadas y terminaciones crema.',
    referenceLinks: [
      { label: 'Ver referencia', href: 'https://example.com/lampara' },
    ],
    reserved: false,
  },
  {
    id: 'monitor',
    image: monitorImage,
    name: 'Monitor visual',
    description: 'Un monitor sencillo para tener cerca el cuarto de Olivia.',
    category: 'Habitación',
    referenceLinks: [
      { label: 'Ver ejemplo', href: 'https://example.com/monitor' },
    ],
    reserved: true,
  },
]
