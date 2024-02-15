interface ChatPageParams {
  id: string
}

interface ChatPageProps {
  params: ChatPageParams
}

function ChatPage({ params }: ChatPageProps) {
  return (
    <main>
      <h1>Chat Page {params.id}</h1>
    </main>
  )
}

export default ChatPage
