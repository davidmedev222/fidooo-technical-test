import { z } from 'zod'

const createChatSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'El nombre del chat es demasiado corto. Mínimo 3 caracteres.' })
    .max(50, { message: 'El nombre del chat es demasiado largo. Máximo 50 caracteres.' })
    .trim(),
  photoURL: z.string().min(1, { message: 'La URL de la imagen es obligatoria.' }).trim(),
  members: z.array(z.string()).nonempty({ message: 'Debe seleccionar al menos un usuario.' })
})

export { createChatSchema }
