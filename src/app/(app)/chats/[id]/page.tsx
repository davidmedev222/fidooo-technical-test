'use client'
import { ChatDetailFooter, ChatDetailHeader, ChatMessageList, ProcessLoader, Separator } from '@/components'
import { auth, db } from '@/services'
import { and, collection, query, where } from 'firebase/firestore'
import { notFound } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

export interface ChatPageParams {
  /** Identificador único para el chat */
  id: string
  /** Propiedades adicionales indexadas por cadena que pueden incluirse */
  [key: string]: string
}

interface ChatPageProps {
  /** Parámetros específicos de la página del chat, incluyendo el ID del chat */
  params: ChatPageParams
}

function ChatPage({ params }: ChatPageProps) {
  const [currentUser] = useAuthState(auth)
  const [values, loading, error] = useCollectionOnce(
    query(
      collection(db, 'conversations'),
      and(where('id', '==', params.id), where('members', 'array-contains', currentUser?.uid))
    )
  )
  const conversation = values?.docs.map((doc) => doc.data())[0]

  if (loading) return <ProcessLoader />
  if (error) return <div>{error.message}</div>
  if (!conversation) notFound()

  return (
    <main className='grid max-h-screen min-h-screen grid-rows-chat-detail'>
      <ChatDetailHeader />
      <Separator />
      <ChatMessageList />
      <ChatDetailFooter />
    </main>
  )
}

export default ChatPage
