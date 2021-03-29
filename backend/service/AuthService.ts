import Knex from 'knex';
import { IUser } from '../model';

export class AuthService {
    constructor(private knex: Knex) { }
    public async getCurrentUser(email: string) {
        const result = await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('email', email)
        return JSON.parse(JSON.stringify(result[0]))

    }
    public async getCurrentUserById(id: number) {
        const result = await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('id', id)
        return JSON.parse(JSON.stringify(result[0]))

    }
}