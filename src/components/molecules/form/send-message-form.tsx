'use client'
import { ChatPageParams } from '@/app/(app)/chats/[id]/page'
import { Button, Form, FormControl, FormField, Input } from '@/components'
import { Message } from '@/models'
import { auth, createMessage, updateConversationByID } from '@/services'
import { sendMessageSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { serverTimestamp } from 'firebase/firestore'
import { SendIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function SendMessageForm() {
  const [currentUser] = useAuthState(auth)
  const params = useParams<ChatPageParams>()
  const form = useForm<z.infer<typeof sendMessageSchema>>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: { message: '' }
  })

  const onSubmit = async ({ message }: z.infer<typeof sendMessageSchema>) => {
    try {
      if (!currentUser) throw new Error('No hay un usuario autenticado.')
      if (!message) return

      const newMessage: Message = {
        id: crypto.randomUUID(),
        sender: {
          id: currentUser.uid,
          photoURL:
            currentUser.photoURL ??
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1708216377/pruebas/fidooo-technical-test/user-avatar_icj0nv.jpg'
        },
        conversationID: params.id,
        text: message,
        timestamp: serverTimestamp()
      }
      await createMessage(newMessage)
      await updateConversationByID(params.id, { lastMessage: message, timestamp: serverTimestamp() })
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex items-center gap-x-2 p-4'>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormControl>
              <Input placeholder='Escribe un mensaje...' {...field} />
            </FormControl>
          )}
        />
        <Button type='submit' disabled={form.formState.isSubmitting}>
          <SendIcon />
          <span className='sr-only'>Icono de enviar mensaje</span>
        </Button>
      </form>
    </Form>
  )
}

export { SendMessageForm }
