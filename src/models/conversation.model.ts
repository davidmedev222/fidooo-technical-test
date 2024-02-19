import { FieldValue } from 'firebase/firestore'

export interface Conversation {
  id: string
  members: string[]
  title: string
  photoURL: string
  lastMessage: string
  timestamp: FieldValue
}
