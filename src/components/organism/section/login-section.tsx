import { SignInForm } from '@/components'

function LoginSection() {
  return (
    <section className='grid gap-y-12 px-4 py-16'>
      <div className='grid gap-y-2 text-center'>
        <h1 className='text-4xl font-bold'>¡Bienvenido de vuelta, Juan!</h1>
        <p className='text-gray-500'>Ingresa tus credenciales a continuación para continuar.</p>
      </div>
      <SignInForm />
    </section>
  )
}

export { LoginSection }
