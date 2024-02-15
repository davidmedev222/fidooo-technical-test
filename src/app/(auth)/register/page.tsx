import { Routes } from '@/utils'
import Link from 'next/link'

function RegisterPage() {
  return (
    <section>
      <Link href={Routes.Login}>Login Page</Link>
    </section>
  )
}

export default RegisterPage
