import { Button, Input } from '@/components'
import { SendIcon } from 'lucide-react'

function SendMessageForm() {
  return (
    <form className='flex items-center gap-x-2 p-4'>
      <Input type='text' placeholder='Escribe un mensaje...' />
      <Button type='submit'>
        <SendIcon />
        <span className='sr-only'>Icono de enviar mensaje</span>
      </Button>
    </form>
  )
}

export { SendMessageForm }
