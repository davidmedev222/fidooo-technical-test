import { Routes } from '@/utils'
import Link from 'next/link'

function LoginPage() {
  return (
    <section>
      <Link href={Routes.Register}>Register Page</Link>
    </section>
  )
}

export default LoginPage
