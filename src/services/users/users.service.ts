import { User } from '@/models'
import { db } from '@/services'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

/**
 * Una función que crea un usuario en la base de datos.
 *
 * @param user - Objeto que representa el usuario a crear
 * @return Una promesa que se resuelve cuando el usuario se crea con éxito
 */
async function createUser(user: User): Promise<void> {
  try {
    await addDoc(collection(db, 'users'), user)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Una función que obtiene un usuario por su ID único.
 *
 * @param userID - El ID único del usuario.
 * @return Una promesa que se resuelve con el objeto usuario si se encuentra, en caso contrario undefined.
 */
async function getUserByID(userID: string): Promise<User | undefined> {
  try {
    const q = query(collection(db, 'users'), where('id', '==', userID))
    const querySnapshot = await getDocs(q)
    const user = querySnapshot.docs.map((user) => user.data())[0]
    return user as User
  } catch (error) {
    console.error(error)
  }
}

export { createUser, getUserByID }
