export type GalleryItem = {
  id: string
  image: string
  title: string
  description: string
  alt: string
}

export type GiftReferenceLink = {
  label: string
  href: string
}

export type GiftItem = {
  id: string
  image: string
  name: string
  description: string
  category: string
  preferenceNote?: string
  referenceLinks: GiftReferenceLink[]
  reserved: boolean
}

export type GiftFilter = 'all' | 'available' | 'reserved'

export type EventConfig = {
  babyName: string
  inviteeGreeting: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  dateLabel: string
  timeLabel: string
  venue: string
  address: string
  mapsUrl: string
  whatsappNumber: string
  footerNote: string
  contactLabel: string
  calendarFile: string
}

export type RsvpAttendance = 'yes' | 'no'

export type RsvpFormState = {
  fullName: string
  attendance: RsvpAttendance
  attendees: number
  message: string
}
