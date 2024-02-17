import { UserPreview } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function UserPreviewList() {
  return (
    <ul className='max-h-80 overflow-y-auto'>
      {users.map((user) => (
        <li key={user}>
          <Link href={`${Routes.Chats}/${user}`}>
            <UserPreview />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { UserPreviewList }
