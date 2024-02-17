'use client'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Separator } from '@/components'
import { Routes, credentialFormSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function SignInForm() {
  const form = useForm<z.infer<typeof credentialFormSchema>>({
    resolver: zodResolver(credentialFormSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = (values: z.infer<typeof credentialFormSchema>) => {
    console.log(values)
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
          <Button type='submit'>Iniciar sesión</Button>
        </form>
      </Form>
      <Separator />
      <div className='grid gap-y-4'>
        <Button variant='outline'>Iniciar sesión con Google</Button>
        <Button variant='outline'>Iniciar sesión con GitHub</Button>
        <p className='text-center text-sm'>
          No tienes una cuenta?{' '}
          <Link className='font-medium underline' href={Routes.Register}>
            Crea una cuenta
          </Link>
        </p>
      </div>
    </div>
  )
}

export { SignInForm }
