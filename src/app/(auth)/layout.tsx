interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='grid min-h-screen items-center lg:grid-cols-2'>
      <div className='hidden size-full bg-blue-500 lg:block' />
      {children}
    </main>
  )
}

export default AuthLayout
