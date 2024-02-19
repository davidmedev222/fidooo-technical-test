import { Message } from '@/models'
import { db } from '@/services'
import { addDoc, collection } from 'firebase/firestore'

async function createMessage(message: Message) {
  try {
    await addDoc(collection(db, 'messages'), message)
  } catch (error) {
    console.error(error)
  }
}

export { createMessage }
