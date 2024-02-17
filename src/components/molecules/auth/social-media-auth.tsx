'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components'
import { auth } from '@/services'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'

function SocialMediaAuth() {
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth)
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth)

  const handleSignInWithGithub = async () => {
    try {
      const user = await signInWithGithub()
      user && console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignInWithGoogle = async () => {
    try {
      const user = await signInWithGoogle()
      user && console.log(user)
    } catch (error) {
      console.log(error)
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
