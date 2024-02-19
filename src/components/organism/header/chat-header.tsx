'use client'
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components'
import { auth } from '@/services'
import { LogOutIcon } from 'lucide-react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'

function ChatHeader() {
  const [user] = useAuthState(auth)
  const [signOut, loading] = useSignOut(auth)

  /**
   * Una función para gestionar el proceso de cierre de sesión.
   * @return Una promesa que se resuelve una vez finalizado el proceso de cierre de sesión.
   */
  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between gap-x-2 bg-white p-4'>
      <Avatar>
        <AvatarImage alt='Avatar del usuario' src={user?.photoURL ?? '/assets/user-avatar.jpg'} />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <h1 className='line-clamp-1 text-lg font-medium'>{user?.displayName ?? 'John Doe'}</h1>
      <Button onClick={handleSignOut} className='rounded-full' variant='ghost' size='icon' disabled={loading}>
        <LogOutIcon size={20} />
      </Button>
    </header>
  )
}

export { ChatHeader }
