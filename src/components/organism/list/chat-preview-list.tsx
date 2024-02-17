import { ChatPreview } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function ChatPreviewList() {
  return (
    <ul>
      {chats.map((chat) => (
        <li key={chat}>
          <Link href={`${Routes.Chats}/${chat}`}>
            <ChatPreview />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { ChatPreviewList }
