import { User } from '@/models'
import { db } from '@/services'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

async function createUser(user: User): Promise<void> {
  try {
    await addDoc(collection(db, 'users'), user)
  } catch (error) {
    console.error(error)
  }
}

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
