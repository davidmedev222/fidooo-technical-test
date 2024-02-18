'use client'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components'
import { auth } from '@/services'
import { Routes, forgotPasswordSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { RotateCcwIcon } from 'lucide-react'
import Link from 'next/link'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' }
  })
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try {
      const success = await sendPasswordResetEmail(values.email)
      success && form.reset()
    } catch (error) {
      console.log(error)
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
                  <Input type='email' placeholder='johndoe@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!sending && <Button type='submit'>Enviar</Button>}
          {sending && (
            <Button disabled>
              <RotateCcwIcon className='animate-spin' />
            </Button>
          )}
        </form>
      </Form>
      {error && <p className='text-sm font-medium text-red-500'>{error.message}</p>}
      <Link className='text-center text-sm font-medium underline' href={Routes.Login}>
        Volver al inicio
      </Link>
    </div>
  )
}

export { ForgotPasswordForm }
