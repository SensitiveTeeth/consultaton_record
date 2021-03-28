import Knex from 'knex';
import { IUser } from '../model';

export class AuthService {
    constructor(private knex: Knex) { }
    public async getCurrentUser(email: string) {
        return (await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('email', email))
    }
    public async getCurrentUserById(id: number) {
        return (await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('id', id))
    }
}