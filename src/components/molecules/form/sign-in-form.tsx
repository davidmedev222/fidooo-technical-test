import { Button, Input, Label, Separator } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function SignInForm() {
  return (
    <div className='mx-auto grid w-full max-w-md gap-y-4'>
      <form className='grid gap-y-4'>
        <div className='grid gap-y-2'>
          <Label htmlFor='email'>Correo electrónico</Label>
          <Input id='email' type='email' placeholder='johndoe@gmail.com' />
        </div>
        <div className='grid gap-y-2'>
          <Label htmlFor='password'>Contraseña</Label>
          <Input id='password' type='password' placeholder='***********' />
        </div>
        <Link className='text-right text-sm font-medium underline' href={Routes.ForgotPassword}>
          ¿Olvidaste tu contraseña?
        </Link>
        <Button type='submit'>Iniciar sesión</Button>
      </form>
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
