import { FieldValue } from 'firebase/firestore'

interface MessageSender {
  id: string
  photoURL: string
}

export interface Message {
  id: string
  conversationID: string
  sender: MessageSender
  text: string
  timestamp: FieldValue
}
