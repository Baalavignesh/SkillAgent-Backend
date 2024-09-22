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

let fetchStudyPlan = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string
    const skill = req.query.skill as string

    const q = query(
      collection(db, "studyplan"),
      where("email", "==", email),
      where("title", "==", skill)
    )

    const querySnapshot = await getDocs(q)
    const studyPlanInfo: any[] = []

    querySnapshot.forEach((doc) => {
        studyPlanInfo.push(doc.data())
    })
    return res.status(200).json(studyPlanInfo[0])
  } catch (error) {
    console.error("Error fetching studyplan info :", error)
    return res.status(500).json({ error: "Error fetching studyplan" })
  }
}

export { addStudyPlan, fetchStudyPlan }
