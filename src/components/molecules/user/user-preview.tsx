import { Avatar, AvatarFallback, AvatarImage } from '@/components'
import { User } from '@/models'

interface UserPreviewProps {
  /** Objeto que representa el usuario  */
  user: User
}

function UserPreview({ user }: UserPreviewProps) {
  return (
    <article className='flex items-center gap-4 p-4 transition-colors hover:bg-slate-100'>
      <Avatar>
        <AvatarImage alt='Avatar del usuario' src={user.photoURL} />
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <header className='grid grow gap-1 text-left'>
        <p className='font-medium'>{user.displayName}</p>
        <p className='line-clamp-1 text-sm'>{user.email}</p>
      </header>
    </article>
  )
}

export { UserPreview }
