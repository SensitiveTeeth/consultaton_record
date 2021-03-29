import express from 'express'
import { authController, clientController, clinicController } from './main'
import { isLoggedIn } from './main'

export const routes = express.Router();
//testing
routes.get('/testing', clientController.testingGetAllUser)
routes.get('/testing_record', clinicController.testingGetAllRecord)


//an API for creating account as a clinic user
//need to login
routes.post('/client_create_account', clientController.clientCreateAccount);

//an API for authenticating logins
routes.post('/login', authController.ClientLogin)
// an API for restore login
routes.get('/user', isLoggedIn, authController.getCurrentUser);


//an API for creating consultation record
//need to login
routes.post('/create_consultation_record', clinicController.clinicCreateRecord)

//an API for getting consultation record
//need to login
routes.post('/get_client_consultation_record', clientController.getClientRecord)