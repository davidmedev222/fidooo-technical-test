'use client'
import { ChatPageParams } from '@/app/(app)/chats/[id]/page'
import { ChatMessage, ChatMessageSkeleton } from '@/components'
import { Message } from '@/models'
import { db } from '@/services'
import { and, collection, orderBy, query, where } from 'firebase/firestore'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

function ChatMessageList() {
  const scrollRef = useRef<HTMLSpanElement | null>(null)
  const params = useParams<ChatPageParams>()
  const [values, loading, error] = useCollection(
    query(collection(db, 'messages'), and(where('conversationID', '==', params.id)), orderBy('timestamp', 'asc'))
  )
  const messages = values?.docs.map((doc) => doc.data()) as Message[]

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (loading) return <ChatMessageSkeleton numberOfMessages={10} />
  if (error) return <p className='text-center text-gray-500'>{error.message}</p>

  return (
    <ul className='flex flex-col gap-y-4 overflow-y-auto p-4'>
      {messages?.length === 0 && <p className='text-center text-gray-500'>No existen mensajes actualmente.</p>}
      {messages?.map((message) => (
        <li key={message.id}>
          <ChatMessage message={message} />
        </li>
      ))}
      <span ref={scrollRef} />
    </ul>
  )
}

export { ChatMessageList }
