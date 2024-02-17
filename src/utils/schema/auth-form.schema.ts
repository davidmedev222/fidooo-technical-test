import { z } from 'zod'

const credentialSchema = z.object({
  email: z
    .string()
    .email({ message: 'Introduzca una dirección de correo electrónico válida.' })
    .min(5, { message: 'El correo electrónico es demasiado corto. Mínimo 5 caracteres.' })
    .trim(),
  password: z.string().min(8, { message: 'La contraseña es demasiado corta. Mínimo 8 caracteres.' }).trim()
})

const signUpSchema = z.object({
  username: z.string().min(3, { message: 'El nombre de usuario es demasiado corto. Mínimo 3 caracteres.' }).trim(),
  email: z
    .string()
    .email({ message: 'Introduzca una dirección de correo electrónico válida.' })
    .min(5, { message: 'El correo electrónico es demasiado corto. Mínimo 5 caracteres.' })
    .trim(),
  password: z.string().min(8, { message: 'La contraseña es demasiado corta. Mínimo 8 caracteres.' }).trim()
})

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: 'Introduzca una dirección de correo electrónico válida.' })
    .min(5, { message: 'El correo electrónico es demasiado corto. Mínimo 5 caracteres.' })
    .trim()
})

export { credentialSchema, forgotPasswordSchema, signUpSchema }
