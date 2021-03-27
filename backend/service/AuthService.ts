import Knex from 'knex';
import { IUser } from '../model';

export class AuthService {
    constructor(private knex: Knex) { }
    public async getCurrentUser(email: string) {
        return this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('email', email)
        // return (await this.knex.raw(`SELECT * FROM admin WHERE usercode = ?`, [usercode])).rows[0];
    }
    public async getCurrentUserById(id: number) {
        await this.knex
            .select<IUser>(
                'id',
                'email',
                'hashed_password'
            )
            .from('client')
            .where('id', id)
        // return (await this.knex.raw(`SELECT * FROM admin WHERE id = ?`, [id])).rows[0];
    }
}