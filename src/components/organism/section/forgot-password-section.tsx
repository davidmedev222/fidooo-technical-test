import { ForgotPasswordForm } from '@/components'

function ForgotPasswordSection() {
  return (
    <section className='grid gap-y-12 px-4 py-16'>
      <div className='grid gap-y-2 text-center'>
        <h1 className='text-4xl font-bold'>¿Olvidaste tu contraseña?</h1>
        <p className='text-gray-500'>Ingresa tu correo electrónico para restablecerla.</p>
      </div>
      <ForgotPasswordForm />
    </section>
  )
}

export { ForgotPasswordSection }
