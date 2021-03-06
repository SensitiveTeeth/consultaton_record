import Knex from 'knex';
import { hashPassword } from '../hash';
import { Client } from '../model';

export class ClientService {
    public constructor(private knex: Knex) { }
    async testingGetAllUser() {
        return await this.knex
            .select<Client>(
                '*'
            )
            .from('client')
    }
    //create account api
    async clientCreateAccount(
        smallCapEmail: string,
        password: string,
        clinic_name: string,
        phone_number: number,
        address: string,
    ) {
        const hashed_password = await hashPassword(password)
        const Email = smallCapEmail.toUpperCase()
        await this.knex
            .insert({
                Email,
                hashed_password,
                clinic_name,
                phone_number,
                address
            })
            .into('client')
    }

    async getUserCountByEmail(email: string) {
        const result = await this.knex
            // .select('id')
            .count('id')
            .from('client')
            .where('email', email)
            .first()
        const count = { ...result }
        return count["count(`id`)"]
    }

    async getClientIDByEmail(email: string) {
        const result = await this.knex
            .select('id')
            .from('client')
            .where('email', email)
            .first()
        return result.id
    }

    async getClientRecord(id: number) {
        const result = await this.knex
            .select('*')
            .from('consultation_record')
            .where('client_id', id)
        return JSON.parse(JSON.stringify(result))
    }
}