'use client'
import { ProcessLoader, UserPreview, UserPreviewSkeleton } from '@/components'
import { Conversation, User } from '@/models'
import { auth, createConversation, db } from '@/services'
import { Routes } from '@/utils'
import { collection, query, serverTimestamp, where } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

function UserPreviewList() {
  const router = useRouter()
  const [isCreatingAChat, setIsCreatingAChat] = useState(false)
  const [currentUser] = useAuthState(auth)
  const [values, loading, error] = useCollectionOnce(
    query(collection(db, 'users'), where('id', '!=', currentUser?.uid))
  )
  const users = values?.docs.map((doc) => doc.data()) as User[]

  if (loading) return <UserPreviewSkeleton numberOfUsers={6} />
  if (error) return <p className='text-center text-gray-500'>{error.message}</p>

  const handleCreateNewChat = async (user: User) => {
    try {
      setIsCreatingAChat(true)
      if (!currentUser) throw new Error('No hay un usuario autenticado.')

      const newConversation: Conversation = {
        id: crypto.randomUUID(),
        members: [user.id, currentUser.uid],
        photoURL: user.photoURL,
        title: user.displayName,
        lastMessage: 'Escribe un mensaje...',
        timestamp: serverTimestamp()
      }
      const conversation = await createConversation(newConversation)
      if (!conversation) throw new Error('Ocurrio un error al crear la conversación.')

      router.push(`${Routes.Chats}/${conversation.id}`)
    } catch (error) {
      console.error(error)
    } finally {
      setIsCreatingAChat(false)
    }
  }

  return (
    <ul className='max-h-80 overflow-y-auto'>
      {isCreatingAChat && <ProcessLoader />}
      {users?.length === 0 && <p className='text-center text-gray-500'>No existen usuarios actualmente.</p>}
      {users?.map((user) => (
        <li key={user.id}>
          <button className='w-full' onClick={async () => await handleCreateNewChat(user)}>
            <UserPreview user={user} />
          </button>
        </li>
      ))}
    </ul>
  )
}

export { UserPreviewList }
