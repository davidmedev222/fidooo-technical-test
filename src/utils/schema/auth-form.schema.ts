import { z } from 'zod'

const credentialFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Introduzca una dirección de correo electrónico válida.' })
    .min(5, { message: 'El correo electrónico es demasiado corto. Mínimo 5 caracteres.' })
    .trim(),
  password: z.string().min(8, { message: 'La contraseña es demasiado corta. Mínimo 8 caracteres.' }).trim()
})

export { credentialFormSchema }
