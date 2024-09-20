import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { Request, Response } from "express"
import db from "../../config/firebase.js"

let addStudyPlan = async (req: Request, res: Response) => {
  try {
    await addDoc(collection(db, "studyplan"), req.body)
    return res.status(200).json({ message: "Data added successfully" })
  } catch (error) {
    console.error("Error adding study plan:", error)
    return res.status(500).json({ error: "Error adding study plan" })
  }
}

export { addStudyPlan } 
