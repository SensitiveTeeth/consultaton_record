import Knex from "knex";

export class ClinicService {
    public constructor(private knex: Knex) { }
    async clinicCreateRecord(
        clinic: string,
        doctor_name: string,
        patient_name: string,
        diagnosis: string,
        medication: string,
        consultation_fee: string,
        follow_up_consultation: string,
        consultation_date_and_time: string,
    ) {

    }
}