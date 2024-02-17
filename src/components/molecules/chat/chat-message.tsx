import { Avatar, AvatarFallback, AvatarImage } from '@/components'
import clsx from 'clsx'

interface User {
  id: string
  displayName: string
  photoURL: string
  email: string
}

interface Message {
  id: string
  sender: User
  text: string
  timestamp: string
}

interface ChatMessageProps {
  message: Message
}

function ChatMessage({ message }: ChatMessageProps) {
  const user = {
    id: '1',
    displayName: 'Max Leiter',
    photoURL: 'https://github.com/shadcn.png',
    email: 'maxleiter@gmail.com'
  }
  const isCurrentUser = user.id === message.sender.id

  return (
    <article className={clsx('flex gap-x-2', isCurrentUser && 'flex-row-reverse')}>
      <Avatar className='size-8'>
        <AvatarImage alt='@shadcn' src={message.sender.photoURL} />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <footer className='grid gap-y-2 rounded-md bg-gray-100 p-2'>
        <p className='text-sm'>{message.text}</p>
        <p className={clsx('text-xs text-gray-500', isCurrentUser && 'text-right')}>hace 2 minutos</p>
      </footer>
    </article>
  )
}

export { ChatMessage }
