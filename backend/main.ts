import dotenv from 'dotenv'
import Knex from 'knex'
import { AuthController } from './controller/AuthController'


import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { Bearer } from 'permit'
import { createIsLoggedIn } from './guard'
import { routes } from './routes'
import { AuthService } from './service/AuthService'


dotenv.config()
const knexConfig = require('./knexfile')
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors({
//     origin: [
//         process.env.REACT_DOMAIN!
//     ]
// }))

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
            }
        }
    }
}
const authService = new AuthService(knex);

export const authController = new AuthController(authService);

// TODO other services



const permit = new Bearer({
    query: "access_token"
})

export const isLoggedIn = createIsLoggedIn(permit, authService)

app.use(routes);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Listening at port ' + PORT)
})
