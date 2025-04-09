import type { User } from './user'

export interface Testimonial {
  id: number | string
  content: string
  user: User
}
