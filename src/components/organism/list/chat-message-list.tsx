import { ChatMessage } from '@/components'

const usuario1 = {
  id: '1',
  displayName: 'Max Leiter',
  photoURL: 'https://github.com/shadcn.png',
  email: 'maxleiter@gmail.com'
}

const usuario2 = {
  id: '2',
  displayName: 'John Doe',
  photoURL: 'https://github.com/shadcn.png',
  email: 'johndoe@gmail.com'
}

const messages = [
  {
    id: '1',
    sender: usuario1,
    text: '¡Hola! ¿Cómo estás?',
    timestamp: '2022-01-01T10:15:00.000Z'
  },
  {
    id: '2',
    sender: usuario2,
    text: '¡Hola! Estoy bien, gracias. ¿Y tú?',
    timestamp: '2022-01-01T10:17:00.000Z'
  },
  {
    id: '3',
    sender: usuario1,
    text: 'Estoy bastante bien también. ¿Has tenido un buen día?',
    timestamp: '2022-01-01T10:20:00.000Z'
  },
  {
    id: '4',
    sender: usuario2,
    text: '¡Genial!',
    timestamp: '2022-01-01T10:22:00.000Z'
  },
  {
    id: '5',
    sender: usuario2,
    text: 'Me alegra escuchar eso. ¿Tienes algún plan para el fin de semana?',
    timestamp: '2022-01-01T10:25:00.000Z'
  },
  {
    id: '6',
    sender: usuario1,
    text: 'Sí, tengo planeado descansar y ver algunas películas. ¿Tú?',
    timestamp: '2022-01-01T10:28:00.000Z'
  },
  {
    id: '7',
    sender: usuario2,
    text: 'Suena perfecto. Yo también estoy pensando en relajarme. Tal vez leer un buen libro.',
    timestamp: '2022-01-01T10:30:00.000Z'
  },
  {
    id: '8',
    sender: usuario1,
    text: 'Eso suena genial. ¿Tienes alguna recomendación de libro?',
    timestamp: '2022-01-01T10:35:00.000Z'
  },
  {
    id: '9',
    sender: usuario2,
    text: '¡Claro! Te recomendaría "El Alquimista" de Paulo Coelho. Es inspirador.',
    timestamp: '2022-01-01T10:40:00.000Z'
  },
  {
    id: '10',
    sender: usuario1,
    text: 'Gracias por la recomendación. Lo buscaré. ¿Algún otro consejo?',
    timestamp: '2022-01-01T10:45:00.000Z'
  },
  {
    id: '11',
    sender: usuario2,
    text: 'Podrías probar con "Cien años de soledad" de Gabriel García Márquez. Es un clásico.',
    timestamp: '2022-01-01T10:50:00.000Z'
  },
  {
    id: '12',
    sender: usuario1,
    text: 'Lo apunto. Gracias. ¡Espero que tengas un excelente fin de semana!',
    timestamp: '2022-01-01T10:55:00.000Z'
  },
  {
    id: '13',
    sender: usuario2,
    text: 'Gracias, ¡igualmente para ti! Hablamos luego.',
    timestamp: '2022-01-01T11:00:00.000Z'
  }
]

function ChatMessageList() {
  return (
    <ul className='grid gap-y-4 overflow-y-auto p-4'>
      {messages.map((message) => (
        <li key={message.id}>
          <ChatMessage message={message} />
        </li>
      ))}
    </ul>
  )
}

export { ChatMessageList }
