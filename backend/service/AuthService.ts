import { knex, Knex } from 'knex';
import { IUser } from '../model';

export class AuthService {
    constructor(private knex: Knex) { }

    public async getCurrentUser(userEmail: string) {
        return
    }
}