import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
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
