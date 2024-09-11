import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { Request, Response } from "express"
import db from "../../config/firebase.js"

let addNewSkill = async (req: Request, res: Response) => {
  try {
    await addDoc(collection(db, "userskills"), req.body)
    return res.status(200).json({ message: "Data added successfully" })
  } catch (error) {
    console.error("Error adding new user skills:", error)
    return res.status(500).json({ error: "Error adding user skills" })
  }
}

let fetchUserSkills = async (req: Request, res: Response) => {
  try {
    const q = query(
      collection(db, "userskills"),
      where("username", "==", req.body.username)
    )

    const querySnapshot = await getDocs(q)
    const skillsArray: any[] = []

    querySnapshot.forEach((doc) => {
      skillsArray.push(doc.data())
    })

    return res.status(200).json(skillsArray)
  } catch (error) {
    console.error("Error fetching user skills:", error)
    // Handle error and send appropriate response
    return res.status(500).json({ error: "Error fetching user skills" })
  }
}

let fetchSkillInfo = async (req: Request, res: Response) => {
  try {
    const username = req.query.username as string
    const skill = req.query.skill as string

    console.log(username, skill)
    const q = query(
      collection(db, "userskills"),
      where("username", "==", username),
      where("title", "==", skill)
    )

    const querySnapshot = await getDocs(q)
    const tempSkillInfo: any[] = []

    querySnapshot.forEach((doc) => {
      tempSkillInfo.push(doc.data())
    })
    return res.status(200).json(tempSkillInfo[0])
  } catch (error) {
    console.error("Error fetching skill info :", error)
    return res.status(500).json({ error: "Error fetching user skills" })
  }
}

export { fetchUserSkills, fetchSkillInfo, addNewSkill }
