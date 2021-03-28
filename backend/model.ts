export interface IUser {
    id: number,
    email: string,
    hashed_password: string,
}

export interface Client {
    id: number,
    email: string,
    hashed_password: string,
    clinic_name: string,
    phone_number: number,
    address: string,
}
export interface ConsultationRecord {

}