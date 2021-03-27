import express from 'express'
// import {usersController, pagesController} from './main'
import { authController } from './main'
import { isLoggedIn } from './main'

export const routes = express.Router();

routes.post('/login', authController.ClientLogin)
