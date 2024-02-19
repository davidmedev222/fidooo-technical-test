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
import { auth } from '@/services'
import { Routes, credentialSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCcwIcon } from 'lucide-react'
import Link from 'next/link'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function SignInForm() {
  const form = useForm<z.infer<typeof credentialSchema>>({
    resolver: zodResolver(credentialSchema),
    defaultValues: { email: '', password: '' }
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)

  /**
   * Una función que maneja el envío del formulario al iniciar sesión con el correo electrónico y contraseña proporcionados.
   *
   * @param values - Los valores obtenidos del envío del formulario.
   * @return Una promesa que se resuelve una vez finalizado el proceso de inicio de sesión.
   */
  const onSubmit = async (values: z.infer<typeof credentialSchema>) => {
    try {
      await signInWithEmailAndPassword(values.email, values.password)
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
          <Link className='text-right text-sm font-medium underline' href={Routes.ForgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
          {!loading && <Button type='submit'>Iniciar sesión</Button>}
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
        No tienes una cuenta?{' '}
        <Link className='font-medium underline' href={Routes.Register}>
          Crea una cuenta
        </Link>
      </p>
    </div>
  )
}

export { SignInForm }
