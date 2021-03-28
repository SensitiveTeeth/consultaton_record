import express from 'express'
import { authController, clientController } from './main'
// import { isLoggedIn } from './main'

export const routes = express.Router();
routes.post('/login', authController.ClientLogin)
routes.get('/testing', clientController.testingGetAllUser)
