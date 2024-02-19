import { Message } from '@/models'
import { db } from '@/services'
import { addDoc, collection } from 'firebase/firestore'

/**
 * Una función que crea un mensaje en la base de datos.
 *
 * @param message - Objeto que representa el mensaje a crear.
 * @return Una promesa que se resuelve cuando el mensaje se crea con éxito
 */
async function createMessage(message: Message) {
  try {
    await addDoc(collection(db, 'messages'), message)
  } catch (error) {
    console.error(error)
  }
}

export { createMessage }
