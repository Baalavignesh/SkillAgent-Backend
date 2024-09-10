import { jwtDecode, JwtPayload } from "jwt-decode"
import { Request, Response } from "express"

let authenticate =  (req: Request, res: Response, next: () => void) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(403).json({ message: "No token provided" })
  }

  try {
    // let decoded: JwtPayload =  jwtDecode(token)
    // const currentTime = Math.floor(Date.now() / 1000)
    // if (decoded.exp! < currentTime) {
    //   return res.status(401).json({ message: "Token has expired" })
    // }
    // else {
    //   console.log("no daata")
    // }
    next()
  } catch (error) {
    console.error("Error decoding access token : ", error)
    // Handle error and send appropriate response
    return res.status(500).json({ error: "Error decoding access token" })
  }
}
export default authenticate
