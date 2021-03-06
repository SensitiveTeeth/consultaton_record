import { Request, Response } from 'express'
import { AuthService } from '../service/AuthService'
import { checkPassword } from '../hash'
import jwtSimple from 'jwt-simple'
import jwt from "../jwt";
import { removeTrim } from './ClientController'

export class AuthController {
    public constructor(public authService: AuthService) {
    }
    ClientLogin = async (req: Request, res: Response) => {
        try {
            req.body = removeTrim(req.body)
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(400).json({ message: 'Incorrect email or Password' })
            }
            const user = await this.authService.getUserByEmail(email);
            if (user == null || user == undefined) {
                return res.status(400).json({ message: 'Incorrect email or Password' })
            }
            if (!await checkPassword(password, user.hashed_password)) {
                return res.status(400).json({ message: 'Incorrect email or Password' })
            }
            const payload = {
                id: user.id
            };
            const token = jwtSimple.encode(payload, jwt.jwtSecret)
            return res.json({
                token: token,
                user: email
            })
        } catch (err) {
            console.error(err);
            return res.status(400).json({ message: 'Unknown error' })
        }
    }
    async getCurrentUser(req: Request, res: Response) {
        return res.json(req.user)
    }
}