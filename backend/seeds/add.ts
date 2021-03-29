import * as Knex from "knex";
import { hashPassword } from "../hash";

export async function seed(knex: Knex) {
    // Deletes ALL existing entries
    await knex("client").del();

    // Inserts seed entries
    await knex("client").insert([
        {
            email: 'testing1@email.com'.toUpperCase(),
            hashed_password: await hashPassword('password1'),
            clinic_name: 'clinic 1',
            phone_number: '11111111',
            address: 'testing address 1'
        },
        {
            email: 'testing2@email.com'.toUpperCase(),
            hashed_password: await hashPassword('password2'),
            clinic_name: 'clinic 2',
            phone_number: '22222222',
            address: 'testing address 2'
        },
        {
            email: 'testing3@email.com'.toUpperCase(),
            hashed_password: await hashPassword('password3'),
            clinic_name: 'clinic 3',
            phone_number: '33333333',
            address: 'testing address 3'
        },
    ]);
};
