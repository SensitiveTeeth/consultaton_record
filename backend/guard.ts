import { Request, Response, NextFunction } from 'express';
import { AuthService } from './service/AuthService'
import { Bearer } from 'permit'
import jwt from './jwt'
import jwtSimple from 'jwt-simple'

export const createIsLoggedIn = (permit: Bearer, authService: AuthService) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = permit.check(req);

            if (!token) return res.status(401).json({ error: "Permission Denied" })

            const payload = jwtSimple.decode(token, jwt.jwtSecret)
            const user = await authService.getCurrentUser(payload.id)

            if (!user) return res.status(401).json({ error: "Permission Denied" })

            const { hashed_password, ...userWithoutPassword } = user
            req.user = userWithoutPassword
            return next()
        }

}