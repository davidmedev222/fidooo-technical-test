import { Conversation } from '@/models'
import { db } from '@/services'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'

/**
 * Una función para crear una conversación en la base de datos.
 *
 * @param conversation - Objeto que representa la conversación a crear.
 * @return Una promesa que se resuelve con un objeto que contiene el ID de la conversación recién creada.
 */
async function createConversation(conversation: Conversation) {
  try {
    const newConversation = await addDoc(collection(db, 'conversations'), conversation)
    await updateDoc(doc(db, 'conversations', newConversation.id), { id: newConversation.id })
    return { id: newConversation.id }
  } catch (error) {
    console.error(error)
  }
}

/**
 * Una función para actualizar una conversación por su ID con los nuevos datos de la conversación.
 *
 * @param conversationID - El ID de la conversación a actualizar.
 * @param newConversation - Objeto que representa los nuevos datos de la conversación.
 * @return Una promesa que se resuelve cuando la conversación se actualiza con éxito.
 */
async function updateConversationByID(conversationID: string, newConversation: Partial<Conversation>) {
  try {
    await updateDoc(doc(db, 'conversations', conversationID), { ...newConversation })
  } catch (error) {
    console.error(error)
  }
}

export { createConversation, updateConversationByID }
