import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Una función que combina múltiples nombres de clase en una sola cadena.
 *
 * @param inputs - Los valores de clase a combinar.
 * @return Los nombres de clase combinados en una sola cadena.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
