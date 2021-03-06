import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import Knex from 'knex'
import { Bearer } from 'permit'
import { createIsLoggedIn } from './guard'
import { AuthController } from './controller/AuthController'
import { ClientController } from './controller/ClientController'
import { AuthService } from './service/AuthService'
import { ClientService } from './service/ClientService'
import { ClinicService } from './service/ClinicService'
import { ClinicController } from './controller/ClinicController'


dotenv.config()
const knexConfig = require('./knexfile')
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    origin: [
        process.env.REACT_NATIVE_DOMAIN!
    ]
}))

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

const clientService = new ClientService(knex)
export const clientController = new ClientController(clientService)

const clinicService = new ClinicService(knex)
export const clinicController = new ClinicController(clinicService)
// TODO other services



const permit = new Bearer({
    query: "access_token"
})

export const isLoggedIn = createIsLoggedIn(permit, authService)
import { routes } from './routes'

app.use(routes);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Listening at port ' + PORT)
})
