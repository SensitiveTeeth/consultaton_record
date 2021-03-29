import * as Knex from "knex";
import { hashPassword } from "../hash";
import moment from 'moment'

export async function seed(knex: Knex) {
    // Deletes ALL existing entries
    await knex("client").del();

    // Inserts seed entries
    const client1 = await knex("client").insert({
        email: 'testing1@email.com'.toUpperCase(),
        hashed_password: await hashPassword('password1'),
        clinic_name: 'clinic 1',
        phone_number: '11111111',
        address: 'testing address 1'
    })
        .returning('id')

    const client1ID = client1.toString()


    await knex("client").insert([
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
    await knex('consultation_record').insert([
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().format('YYYY-MM-DD hh:mm:ss'),
        },
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().add(1, 'days').format('YYYY-MM-DD hh:mm:ss'),
        },
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss'),
        },
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().add(8, 'days').format('YYYY-MM-DD hh:mm:ss'),
        },
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().add(35, 'days').format('YYYY-MM-DD hh:mm:ss'),
        },
        {
            client_id: client1ID,
            clinic: 'clinic 1',
            doctor_name: 'doctor 1',
            patient_name: 'patient 1',
            diagnosis: 'dia',
            medication: 'pills',
            consultation_fee: '$100',
            follow_up_consultation: 'No',
            consultation_date_and_time: moment().add(36, 'days').format('YYYY-MM-DD hh:mm:ss'),
        },
    ])
};

