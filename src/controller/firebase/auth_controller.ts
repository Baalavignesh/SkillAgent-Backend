import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { Request, Response } from "express"

const auth = getAuth()

let RegisterUser = (req: Request, res: Response) => {
  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      return res.status(200).json(user)
    })
    .catch((error) => {
      const errorMessage = error.message
      return res
        .status(500)
        .json({ error: `${errorMessage}` })
    })
}

let SignInUser = (req: Request, res: Response) => {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      return res.status(200).json(user)
    })
    .catch((error) => {
      const errorMessage = error.message
      return res
        .status(500)
        .json({ error: `${errorMessage}` })
    })
}

let LogoutUser = (req: Request, res: Response) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('done')
      return res.status(200).json({ message: "User logged out successfully" });
    })
    .catch((error) => {
      // An error happened.
      return res.status(500).json({ error: "Error logging-out user" })
    })
}

export { RegisterUser, SignInUser, LogoutUser }
