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
  const extraMessage = form.message.trim() ? `\n${form.message.trim()}` : ''
  const heartText = '<3'

  if (form.attendance === 'yes') {
    return `Hola ${heartText} Soy ${form.fullName}.\nQueria confirmar que voy a asistir al baby shower de ${event.babyName}. Vamos a ser ${form.attendees} persona/s.${extraMessage}`
  }

  return `Hola ${heartText} Soy ${form.fullName}.\nQueria avisar que no voy a poder asistir al baby shower de ${event.babyName}.${extraMessage}`
}
