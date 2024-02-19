import { Skeleton } from '@/components'

interface UserPreviewSkeletonProps {
  /**
   * El número de esqueletos de usuarios a mostrar.
   */
  numberOfUsers?: number
}

function UserPreviewSkeleton({ numberOfUsers = 3 }: UserPreviewSkeletonProps) {
  const users = new Array(numberOfUsers).fill(0)

  return (
    <div className='max-h-80 overflow-y-auto'>
      {users.map((_, index) => (
        <div key={index} className='flex items-center gap-x-4 p-4'>
          <Skeleton className='size-10 rounded-full' />
          <div className='grid grow gap-y-1'>
            <Skeleton className='h-4 w-1/2' />
            <Skeleton className='h-3.5' />
          </div>
        </div>
      ))}
    </div>
  )
}

export { UserPreviewSkeleton }
