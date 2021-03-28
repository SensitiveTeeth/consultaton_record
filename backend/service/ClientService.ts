import Knex from 'knex';
import { Client } from '../model';

export class ClientService {
    constructor(public knex: Knex) { }
    async testingGetAllUser() {
        return await this.knex
            .select<Client>(
                '*'
            )
            .from('client')
    }
}