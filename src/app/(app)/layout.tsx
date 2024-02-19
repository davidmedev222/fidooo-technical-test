'use client'
import { ProcessLoader } from '@/components'
import { auth } from '@/services'
import { Routes } from '@/utils'
import { redirect } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'

interface AppLayoutProps {
  /** Los componentes hijo que se renderizarán dentro del diseño. */
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  const [user, loading] = useAuthState(auth)

  if (loading) return <ProcessLoader />
  if (!user) redirect(Routes.Login)

  return children
}

export default AppLayout
