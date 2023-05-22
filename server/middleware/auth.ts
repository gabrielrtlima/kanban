import { Request, Response, NextFunction } from 'express'
const jwt = require('jsonwebtoken')

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')

  if (!token) return res.status(403).json({ message: 'Access denied' })

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    if (decoded) return next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}