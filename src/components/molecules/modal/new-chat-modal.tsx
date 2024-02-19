'use client'
import { UserPreviewList } from '@/components'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
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
          <DialogDescription>Selecciona un usuario para comenzar a chatear.</DialogDescription>
        </DialogHeader>
        <UserPreviewList />
      </DialogContent>
    </Dialog>
  )
}

export { NewChatModal }
