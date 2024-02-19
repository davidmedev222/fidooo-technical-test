'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components'
import { Message } from '@/models'
import { auth } from '@/services'
import clsx from 'clsx'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale/es'
import { Timestamp } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

interface ChatMessageProps {
  message: Message
}

function ChatMessage({ message }: ChatMessageProps) {
  const [currentUser] = useAuthState(auth)
  const isCurrentUser = currentUser?.uid === message.sender.id
  const messageTimestamp = message.timestamp as Timestamp
  const timestamp = messageTimestamp
    ? formatDistanceToNow(messageTimestamp.toDate(), { addSuffix: true, locale: es, includeSeconds: true })
    : '...'

  return (
    <article className={clsx('flex gap-x-2', isCurrentUser && 'flex-row-reverse')}>
      <Avatar className='size-8'>
        <AvatarImage alt='Avatar del usuario' src={message.sender.photoURL} />
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <footer className='grid gap-y-2 rounded-md bg-gray-100 p-2'>
        <p className='text-sm'>{message.text}</p>
        <p className={clsx('text-xs text-gray-500', isCurrentUser && 'text-right')}>{timestamp}</p>
      </footer>
    </article>
  )
}

export { ChatMessage }
