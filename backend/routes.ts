import express from 'express'
import { authController, clientController } from './main'
import { isLoggedIn } from './main'

export const routes = express.Router();
//testing
routes.get('/testing', clientController.testingGetAllUser)


//an API for creating account as a clinic user
routes.post('/client_create_account', clientController.clientCreateAccount);

//an API for authenticating logins
routes.post('/login', authController.ClientLogin)

routes.get('/user', isLoggedIn, authController.getCurrentUser);

