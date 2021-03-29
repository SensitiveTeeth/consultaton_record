import Knex from 'knex';
import { IUser } from '../model';

export class AuthService {
    public constructor(private knex: Knex) { }
    async getUserByEmail(email: string) {
        const result = await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('email', email)
            .first()
        return result
        // return JSON.parse(JSON.stringify(result[0]))

    }
    async getCurrentUserById(id: number) {
        const result = await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('id', id)
            .first()
        return result
        // return JSON.parse(JSON.stringify(result[0]))

    }
}