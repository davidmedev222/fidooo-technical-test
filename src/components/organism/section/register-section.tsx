import { SignUpForm } from '@/components'

function RegisterSection() {
  return (
    <section className='grid gap-y-8 px-4 py-16'>
      <div className='grid gap-y-2 text-center'>
        <h1 className='text-4xl font-bold'>¡Bienvenido a Fidooo!</h1>
        <p className='text-gray-500'>Crea una cuenta para comenzar a hablar con usuarios.</p>
      </div>
      <SignUpForm />
    </section>
  )
}

export { RegisterSection }
