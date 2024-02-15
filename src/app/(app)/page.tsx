import { Routes } from '@/utils'
import Link from 'next/link'

function ChatPage() {
  return (
    <main>
      <h1 className='text-2xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quia architecto, atque magnam minima,
        ratione aliquid nemo quis exercitationem autem quas blanditiis cupiditate animi laborum nostrum sunt libero
        dignissimos inventore!
      </h1>
      <Link href={Routes.Login}>Auth</Link>
      <Link href={`${Routes.Chats}/1`}>Chat 1</Link>
      <Link href={Routes.NewChat}>New Chat</Link>
      <Link href={Routes.ForgotPassword}>Forgot Password</Link>
    </main>
  )
}

export default ChatPage
