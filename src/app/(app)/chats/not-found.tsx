import { buttonVariants } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function NotFoundPage() {
  return (
    <div className='grid min-h-screen place-content-center gap-y-8 px-4 py-16 text-center'>
      <div className='grid gap-y-2'>
        <p className='text-7xl font-bold'>404</p>
        <p className='text-gray-500'>No hemos podido encontrar la conversación que busca.</p>
      </div>
      <Link href={Routes.Home} className={buttonVariants()}>
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
