import express from 'express';
import { UserService } from './service/AuthService'
import Bearer from 'permit'
import jwt from './jwt'
import jwtSimple from 'jwt-simple'

export const createIsLoggedIn = (permit: Bearer, auth)