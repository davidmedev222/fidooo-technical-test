import { Skeleton } from '@/components'

function ChatDetailHeaderSkeleton() {
  return (
    <div className='flex items-center gap-x-2 p-4'>
      <Skeleton className='size-9 rounded-full' />
      <div className='flex grow items-center gap-x-2'>
        <Skeleton className='size-10 rounded-full' />
        <Skeleton className='h-4 w-1/2' />
      </div>
      <Skeleton className='size-14 rounded-full' />
      <Skeleton className='size-14 rounded-full' />
    </div>
  )
}

export { ChatDetailHeaderSkeleton }
