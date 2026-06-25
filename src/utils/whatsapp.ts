import type { EventConfig, GiftItem, RsvpFormState } from '../types'

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '')
}

export function buildWhatsappUrl(phone: string, message: string) {
  const normalizedPhone = normalizePhone(phone)
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
}

export function buildGiftReservationMessage(gift: GiftItem, event: EventConfig) {
  return `Hola, quiero avisar que elegi el regalo "${gift.name}" para el Baby Shower de ${event.babyName}.`
}

export function buildRsvpMessage(form: RsvpFormState, event: EventConfig) {
  if (form.attendance === 'yes') {
    return [
      `Hola, soy ${form.fullName}.`,
      `Voy a asistir al Baby Shower de ${event.babyName}.`,
      `Cantidad de asistentes: ${form.attendees}.`,
      form.message ? `Mensaje: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
  }

  return [
    `Hola, soy ${form.fullName}.`,
    `No voy a poder asistir al Baby Shower de ${event.babyName}.`,
    form.message ? `Mensaje: ${form.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}
