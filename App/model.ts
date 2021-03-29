export interface IRecord {
    client_id: number | null;
    clinic: string | null;
    consultation_date_and_time: string | null;
    consultation_fee: string | null;
    created_at: string | null;
    diagnosis: string | null;
    doctor_name: string | null;
    follow_up_consultation: string | null;
    id: number | null;
    medication: string | null;
    patient_name: string | null;
    updated_at: string | null;
}

export const initialRecord: IRecord = {
    client_id: null,
    clinic: null,
    consultation_date_and_time: null,
    consultation_fee: null,
    created_at: null,
    diagnosis: null,
    doctor_name: null,
    follow_up_consultation: null,
    id: null,
    medication: null,
    patient_name: null,
    updated_at: null,
}