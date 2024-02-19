'use client'
import { ChatPageParams } from '@/app/(app)/chats/[id]/page'
import { Avatar, AvatarFallback, AvatarImage, Button, ChatDetailHeaderSkeleton } from '@/components'
import { Conversation } from '@/models'
import { db } from '@/services'
import { Routes } from '@/utils'
import { doc } from 'firebase/firestore'
import { ChevronLeftIcon, InfoIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

function ChatDetailHeader() {
  const params = useParams<ChatPageParams>()
  const [value, loading, error] = useDocumentOnce(doc(db, 'conversations', params.id))
  const conversation = value?.data() as Conversation

  if (loading) return <ChatDetailHeaderSkeleton />
  if (error) return <p className='text-center text-gray-500'>{error.message}</p>

  return (
    <header className='flex items-center gap-x-2 p-4'>
      <Button className='rounded-full' size='sm' variant='ghost' asChild>
        <Link href={Routes.Home}>
          <ChevronLeftIcon />
          <span className='sr-only'>Icono de volver</span>
        </Link>
      </Button>
      <div className='flex grow items-center gap-x-2'>
        <Avatar>
          <AvatarImage alt='Avatar de la conversación' src={conversation.photoURL} />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <span className='line-clamp-1 text-sm font-medium'>{conversation.title}</span>
      </div>
      <Button className='rounded-full' size='icon' variant='ghost'>
        <PhoneIcon size={20} />
        <span className='sr-only'>Icono de llamada</span>
      </Button>
      <Button className='rounded-full' size='icon' variant='ghost'>
        <InfoIcon size={20} />
        <span className='sr-only'>Icono de información</span>
      </Button>
    </header>
  )
}

export { ChatDetailHeader }
