'use client'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  ProcessLoader,
  ToggleGroup,
  ToggleGroupItem,
  UserPreview,
  UserPreviewSkeleton
} from '@/components'
import { Conversation, User } from '@/models'
import { auth, createConversation, db, storage } from '@/services'
import { Routes, createChatSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { collection, query, serverTimestamp, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function NewChatForm() {
  const form = useForm<z.infer<typeof createChatSchema>>({
    resolver: zodResolver(createChatSchema),
    defaultValues: { title: '', photoURL: '', members: [] }
  })
  const router = useRouter()
  const [isCreatingAChat, setIsCreatingAChat] = useState(false)
  const [currentUser] = useAuthState(auth)
  const [values, loading, error] = useCollectionOnce(
    query(collection(db, 'users'), where('id', '!=', currentUser?.uid))
  )
  const users = values?.docs.map((doc) => doc.data()) as User[]

  /**
   * Una función para gestionar el proceso de creación de una nueva conversación.
   *
   * @param values - Un objeto que representa la información de la conversación a crear.
   * @return Una promesa que se resuelve cuando la conversación se haya creado exitosamente.
   */
  const onSubmit = async ({ title, photoURL, members }: z.infer<typeof createChatSchema>) => {
    try {
      setIsCreatingAChat(true)
      if (!currentUser) throw new Error('No hay un usuario autenticado.')

      const newConversation: Conversation = {
        id: crypto.randomUUID(),
        members: [...members, currentUser.uid],
        photoURL,
        title,
        lastMessage: 'Escribe un mensaje...',
        timestamp: serverTimestamp()
      }
      const conversation = await createConversation(newConversation)
      if (!conversation) throw new Error('Ocurrio un error al crear la conversación.')

      router.push(`${Routes.Chats}/${conversation.id}`)
    } catch (error) {
      console.error(error)
    } finally {
      setIsCreatingAChat(false)
    }
  }

  /**
   * Una función para manejar el evento de cambio de archivo, carga el archivo al almacenamiento, y actualiza el archivo del formulario con la URL de descarga.
   *
   * @param ev - Objeto que representa el evento de cambio de archivo.
   * @param onChangeFormFile - Una función que se utiliza para actualizar el valor del archivo del formulario.
   * @return Una promesa que se resuelve una vez finalizado el proceso de carga de archivo.
   */
  const handleOnChangeFile = async (
    ev: React.ChangeEvent<HTMLInputElement>,
    onChangeFormFile: (...event: any[]) => void
  ) => {
    try {
      const file = ev.target.files?.[0]
      if (!file) return
      if (!file.type.includes('image')) return onChangeFormFile('')

      const storageRef = ref(storage, `conversations/${file.name}`)
      await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(storageRef)
      onChangeFormFile(downloadURL)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      {isCreatingAChat && <ProcessLoader />}
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-4'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del chat</FormLabel>
              <FormControl>
                <Input placeholder='Fidooo Chat' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='photoURL'
          render={({ field: { value, onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Imagen del chat</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={async (ev) => await handleOnChangeFile(ev, onChange)}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='members'
          render={({ field: { value, onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Usuarios para el chat</FormLabel>
              <FormControl>
                <ToggleGroup
                  type='multiple'
                  className='grid max-h-36 justify-normal overflow-y-auto'
                  onValueChange={(value) => onChange(value)}
                  {...rest}
                >
                  {error && <p className='text-center text-red-500'>{error.message}</p>}
                  {users?.length === 0 && <p className='text-center text-gray-500'>No existen usuarios actualmente.</p>}
                  {loading && <UserPreviewSkeleton numberOfUsers={6} />}
                  {users?.map((user) => (
                    <ToggleGroupItem key={user.id} value={user.id} className='h-auto justify-normal px-0'>
                      <UserPreview user={user} />
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Crear chat</Button>
      </form>
    </Form>
  )
}

export { NewChatForm }
