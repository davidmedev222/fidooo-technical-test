'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components'
import { User } from '@/models'
import { auth, createUser, getUserByID } from '@/services'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'

function SocialMediaAuth() {
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth)
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth)

  /**
   * Gestiona el inicio de sesión con Github, creando un nuevo usuario si no existe en la base de datos.
   *
   * @return Una Promesa que se resuelve cuando la función se completa con éxito.
   */
  const handleSignInWithGithub = async () => {
    try {
      const userCredentials = await signInWithGithub()
      if (!userCredentials) throw new Error('Ocurrio un error al iniciar sesión con Github.')

      const existUser = await getUserByID(userCredentials.user.uid)
      if (existUser) return

      const newUser: User = {
        id: userCredentials.user.uid,
        displayName: userCredentials.user.displayName ?? 'John Doe',
        email: userCredentials.user.email ?? 'johndoe@gmail.com',
        photoURL:
          userCredentials.user.photoURL ??
          'https://res.cloudinary.com/dos3i5jqy/image/upload/v1708216377/pruebas/fidooo-technical-test/user-avatar_icj0nv.jpg'
      }
      await createUser(newUser)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Gestiona el inicio de sesión con Google, creando un nuevo usuario si no existe en la base de datos.
   *
   * @return Una Promesa que se resuelve cuando la función se completa con éxito.
   */
  const handleSignInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithGoogle()
      if (!userCredentials) throw new Error('Ocurrio un error al iniciar sesión con Google.')

      const existUser = await getUserByID(userCredentials.user.uid)
      if (existUser) return

      const newUser: User = {
        id: userCredentials.user.uid,
        displayName: userCredentials.user.displayName ?? 'John Doe',
        email: userCredentials.user.email ?? 'johndoe@gmail.com',
        photoURL:
          userCredentials.user.photoURL ??
          'https://res.cloudinary.com/dos3i5jqy/image/upload/v1708216377/pruebas/fidooo-technical-test/user-avatar_icj0nv.jpg'
      }
      await createUser(newUser)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='grid gap-y-4'>
      <Button onClick={handleSignInWithGoogle} variant='outline' disabled={loadingGoogle}>
        Iniciar sesión con Google
      </Button>
      <Button onClick={handleSignInWithGithub} variant='outline' disabled={loadingGithub}>
        Iniciar sesión con GitHub
      </Button>
      {errorGithub && <p className='text-sm font-medium text-red-500'>{errorGithub.message}</p>}
      {errorGoogle && <p className='text-sm font-medium text-red-500'>{errorGoogle.message}</p>}
    </div>
  )
}

export { SocialMediaAuth }
