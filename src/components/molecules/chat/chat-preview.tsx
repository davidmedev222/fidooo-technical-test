import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function ChatPreview() {
  return (
    <article className='flex items-center gap-4 p-4 transition-colors hover:bg-slate-100'>
      <Avatar>
        <AvatarImage alt='@shadcn' src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <header className='grid grow gap-1'>
        <p className='font-medium'>Max Leiter</p>
        <p className='line-clamp-1 text-sm'>¿Qué le parece el nuevo diseño?</p>
      </header>
    </article>
  )
}

export { ChatPreview }
