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
  Separator,
  SocialMediaAuth
} from '@/components'
import { User } from '@/models'
import { auth, createUser } from '@/services'
import { Routes, signUpSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCcwIcon } from 'lucide-react'
import Link from 'next/link'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '' }
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
  const [updateProfile] = useUpdateProfile(auth)

  const onSubmit = async ({ username, email, password }: z.infer<typeof signUpSchema>) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(email, password)
      if (!userCredentials) throw new Error('Ocurrió un error al crear usuario.')

      await updateProfile({
        displayName: username,
        photoURL:
          'https://res.cloudinary.com/dos3i5jqy/image/upload/v1708216377/pruebas/fidooo-technical-test/user-avatar_icj0nv.jpg'
      })

      const newUser: User = {
        id: userCredentials.user.uid,
        displayName: username,
        photoURL:
          'https://res.cloudinary.com/dos3i5jqy/image/upload/v1708216377/pruebas/fidooo-technical-test/user-avatar_icj0nv.jpg',
        email
      }
      await createUser(newUser)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mx-auto grid w-full max-w-md gap-y-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='*********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!loading && <Button type='submit'>Registrarse</Button>}
          {loading && (
            <Button disabled>
              <RotateCcwIcon className='animate-spin' />
            </Button>
          )}
        </form>
      </Form>
      {error && <p className='text-sm font-medium text-red-500'>{error.message}</p>}
      <Separator />
      <SocialMediaAuth />
      <p className='text-center text-sm'>
        ¿Ya tienes una cuenta?{' '}
        <Link className='font-medium underline' href={Routes.Login}>
          Inicia sesión
        </Link>
      </p>
    </div>
  )
}

export { SignUpForm }
