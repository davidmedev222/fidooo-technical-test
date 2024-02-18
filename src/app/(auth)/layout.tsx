'use client'
import { auth } from '@/services'
import { Routes } from '@/utils'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  const [user, loading] = useAuthState(auth)
  if (loading) return <div>Cargando...</div>
  if (user) redirect(Routes.Home)

  return (
    <main className='grid min-h-screen items-center lg:grid-cols-2'>
      <div className='relative hidden size-full bg-black lg:block'>
        <Image className='object-cover' src='/assets/auth-banner.jpeg' alt='banner' fill sizes='50vw' />
      </div>
      {children}
    </main>
  )
}

export default AuthLayout
