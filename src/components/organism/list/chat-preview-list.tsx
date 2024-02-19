'use client'
import { ChatPreview, ChatPreviewSkeleton } from '@/components'
import { Conversation } from '@/models'
import { auth, db } from '@/services'
import { Routes } from '@/utils'
import { collection, orderBy, query, where } from 'firebase/firestore'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'

function ChatPreviewList() {
  const [currentUser] = useAuthState(auth)
  const [values, loading, error] = useCollection(
    query(
      collection(db, 'conversations'),
      where('members', 'array-contains', currentUser?.uid),
      orderBy('timestamp', 'desc')
    )
  )
  const chats = values?.docs.map((doc) => doc.data()) as Conversation[]

  if (loading) return <ChatPreviewSkeleton numberOfChats={8} />
  if (error) return <p className='text-center text-gray-500'>{error.message}</p>

  return (
    <ul>
      {chats?.length === 0 && <p className='text-center text-gray-500'>No existen conversaciones actualmente.</p>}
      {chats?.map((chat) => (
        <li key={chat.id}>
          <Link href={`${Routes.Chats}/${chat.id}`}>
            <ChatPreview conversation={chat} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { ChatPreviewList }
