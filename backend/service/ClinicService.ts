import Knex from "knex";

export class ClinicService {
    public constructor(private knex: Knex) { }

    async testingGetAllRecord() {
        return await this.knex
            .select(
                '*'
            )
            .from('consultation_record')
    }

    async clinicCreateRecord(
        client_id: number,
        clinic: string,
        doctor_name: string,
        patient_name: string,
        diagnosis: string,
        medication: string,
        consultation_fee: string,
        follow_up_consultation: string,
        consultation_date_and_time: string,
    ) {
        await this.knex
            .insert({
                client_id,
                clinic,
                doctor_name,
                patient_name,
                diagnosis,
                medication,
                consultation_fee,
                follow_up_consultation,
                consultation_date_and_time,
            })
            .into('consultation_record')
    }

    async getClientIDByEmail(email: string) {
        const result = await this.knex
            .select('id')
            .from('client')
            .where('email', email)
            .first()
        return result
    }

    async getClinicAllRecord(clinic: string) {
        const result = await this.knex
            .select('*')
            .from('consultation_record')
            .where('clinic', clinic)
            .first()
        return result
    }
}