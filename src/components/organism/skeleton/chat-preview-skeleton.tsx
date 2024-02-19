import { Skeleton } from '@/components'

interface ChatPreviewSkeletonProps {
  numberOfChats?: number
}

function ChatPreviewSkeleton({ numberOfChats = 3 }: ChatPreviewSkeletonProps) {
  const chats = new Array(numberOfChats).fill(0)

  return (
    <div>
      {chats.map((_, index) => (
        <div key={index} className='flex items-center gap-x-4 p-4'>
          <Skeleton className='size-10 rounded-full' />
          <div className='grid grow gap-y-1'>
            <Skeleton className='h-4 max-w-40' />
            <Skeleton className='h-3.5 max-w-sm' />
          </div>
        </div>
      ))}
    </div>
  )
}

export { ChatPreviewSkeleton }
