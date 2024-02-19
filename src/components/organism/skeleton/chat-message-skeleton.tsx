import { Skeleton } from '@/components'

interface ChatMessageSkeletonProps {
  /**
   * El número de esqueletos de mensajes a mostrar.
   */
  numberOfMessages: number
}

function ChatMessageSkeleton({ numberOfMessages = 3 }: ChatMessageSkeletonProps) {
  const messages = new Array(numberOfMessages).fill(0)

  return (
    <div className='grid gap-y-4 overflow-y-auto p-4'>
      {messages.map((_, index) => (
        <article key={index} className='flex gap-x-2'>
          <Skeleton className='size-8 rounded-full' />
          <footer className='grid grow gap-y-2'>
            <Skeleton className='h-3 w-3/4' />
            <Skeleton className='h-3.5 w-1/4' />
          </footer>
        </article>
      ))}
    </div>
  )
}

export { ChatMessageSkeleton }
