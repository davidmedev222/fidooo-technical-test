import { Conversation } from '@/models'
import { db } from '@/services'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'

async function createConversation(conversation: Conversation) {
  try {
    const newConversation = await addDoc(collection(db, 'conversations'), conversation)
    await updateDoc(doc(db, 'conversations', newConversation.id), { id: newConversation.id })
    return { id: newConversation.id }
  } catch (error) {
    console.error(error)
  }
}

async function updateConversationByID(conversationID: string, newConversation: Partial<Conversation>) {
  try {
    await updateDoc(doc(db, 'conversations', conversationID), { ...newConversation })
  } catch (error) {
    console.error(error)
  }
}

export { createConversation, updateConversationByID }
