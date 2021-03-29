import express from 'express'
import { authController, clientController, clinicController } from './main'
import { isLoggedIn } from './main'

export const routes = express.Router();
//testing

// routes.get('/testing', clientController.testingGetAllUser)

//An API for getting a list of consultation records for a clinic
routes.get('/all_record', clinicController.getAllRecord)
//an API for creating account as a client user
routes.post('/client_create_account', clientController.clientCreateAccount);
//an API for creating consultation record
routes.post('/create_consultation_record', clinicController.clinicCreateRecord)




//an API for authenticating logins
routes.post('/login', authController.ClientLogin)
// an API for restore login
routes.get('/user', isLoggedIn, authController.getCurrentUser);
//an API for getting consultation record
//need to login
routes.post('/get_client_consultation_record', isLoggedIn, clientController.getClientRecord)