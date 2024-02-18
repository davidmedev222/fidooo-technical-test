export interface User {
  id: string
  displayName: string
  photoURL: string
  email: string
}

/*
users -> id, displayName, photoURL, email
conversations -> id, members, lastMessage
messages -> id, sender, text, timestamp
*/
