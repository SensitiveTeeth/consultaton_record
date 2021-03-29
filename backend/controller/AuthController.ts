import { Request, Response } from 'express'
import { AuthService } from '../service/AuthService'
import { checkPassword } from '../hash'
import jwtSimple from 'jwt-simple'
import jwt from "../jwt";

export class AuthController {
    public constructor(public authService: AuthService) {
    }
    ClientLogin = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(400).json({ error: 'Incorrect email or Password' })
            }

            const user = await this.authService.getCurrentUser(email);
            if (user == null) {
                return res.status(400).json({ error: 'Incorrect email or Password' })
            }
            if (!await checkPassword(password, user.hashed_password)) {
                return res.status(400).json({ error: 'Incorrect email or Password' })
            }
            const payload = {
                id: user.id
            };
            const token = jwtSimple.encode(payload, jwt.jwtSecret)
            return res.json({
                token: token
            })
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: 'Unknown error' })
        }
    }
}