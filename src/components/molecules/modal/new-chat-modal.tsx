'use client'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  NewChatForm
} from '@/components'
import { MessageCirclePlus } from 'lucide-react'
import { useState } from 'react'

function NewChatModal() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  /**
   * Cambia el estado de visibilidad del modal.
   */
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={toggleModal} className='fixed bottom-8 right-4 rounded-full' size='icon'>
          <MessageCirclePlus size={32} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Crea un nuevo chat</DialogTitle>
          <DialogDescription>Completa los campos para comenzar a chatear.</DialogDescription>
        </DialogHeader>
        <NewChatForm />
      </DialogContent>
    </Dialog>
  )
}

export { NewChatModal }
