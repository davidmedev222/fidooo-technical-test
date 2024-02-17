import { ChatHeader, ChatPreviewList, NewChatModal, Separator } from '@/components'

function ChatPage() {
  return (
    <main>
      <ChatHeader />
      <Separator />
      <ChatPreviewList />
      <NewChatModal />
    </main>
  )
}

export default ChatPage
