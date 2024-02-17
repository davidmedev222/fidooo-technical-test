import { ChatDetailFooter, ChatDetailHeader, ChatMessageList, Separator } from '@/components'

interface ChatPageParams {
  id: string
}

interface ChatPageProps {
  params: ChatPageParams
}

function ChatPage({ params }: ChatPageProps) {
  return (
    <main className='grid-rows-chat-detail grid max-h-screen min-h-screen'>
      <ChatDetailHeader />
      <Separator />
      <ChatMessageList />
      <ChatDetailFooter />
    </main>
  )
}

export default ChatPage
