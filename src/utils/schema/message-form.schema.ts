import { z } from 'zod'

const sendMessageSchema = z.object({
  message: z.string().trim()
})

export { sendMessageSchema }
