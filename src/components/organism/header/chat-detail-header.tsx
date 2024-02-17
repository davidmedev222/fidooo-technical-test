import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components'
import { Routes } from '@/utils'
import { ChevronLeftIcon, InfoIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

function ChatDetailHeader() {
  return (
    <header className='flex items-center gap-x-2 p-4'>
      <Button className='rounded-full' size='sm' variant='ghost' asChild>
        <Link href={Routes.Home}>
          <ChevronLeftIcon />
          <span className='sr-only'>Icono de volver</span>
        </Link>
      </Button>
      <div className='flex grow items-center gap-x-2'>
        <Avatar>
          <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span className='line-clamp-1 text-sm font-medium'>Max Leiter</span>
      </div>
      <Button className='rounded-full' size='icon' variant='ghost'>
        <PhoneIcon size={20} />
        <span className='sr-only'>Icono de llamada</span>
      </Button>
      <Button className='rounded-full' size='icon' variant='ghost'>
        <InfoIcon size={20} />
        <span className='sr-only'>Icono de información</span>
      </Button>
    </header>
  )
}

export { ChatDetailHeader }
