import { Button, Input, Label, Separator } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function SignUpForm() {
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
        <Button type='submit'>Crear cuenta</Button>
      </form>
      <Separator />
      <div className='grid gap-y-4'>
        <Button variant='outline'>Iniciar sesión con Google</Button>
        <Button variant='outline'>Iniciar sesión con GitHub</Button>
        <p className='text-center text-sm'>
          ¿Ya tienes una cuenta?{' '}
          <Link className='font-medium underline' href={Routes.Login}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export { SignUpForm }
