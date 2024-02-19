import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Conversation } from '@/models'

interface ChatPreviewProps {
  conversation: Conversation
}

function ChatPreview({ conversation }: ChatPreviewProps) {
  return (
    <article className='flex items-center gap-4 p-4 transition-colors hover:bg-slate-100'>
      <Avatar>
        <AvatarImage alt='Avatar del chat' src={conversation.photoURL} />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <header className='grid grow gap-1'>
        <p className='font-medium'>{conversation.title}</p>
        <p className='line-clamp-1 text-sm'>{conversation.lastMessage}</p>
      </header>
    </article>
  )
}

export { ChatPreview }
