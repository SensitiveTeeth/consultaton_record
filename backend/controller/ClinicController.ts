import { Request, Response } from 'express'
import { ClinicService } from '../service/ClinicService'
import { removeTrim } from './ClientController'

export class ClinicController {
    public constructor(private clinicService: ClinicService) {
    }
    testingGetAllRecord = async (req: Request, res: Response) => {
        try {
            return res.json(await this.clinicService.testingGetAllRecord())
        } catch (err) {
            return res.status(500).json({ error: 'Internal service error' })

        }
    }

    clinicCreateRecord = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: 'Invalid input' })
            }
            req.body = removeTrim(req.body)
            const {
                client_email,
                clinic,
                doctor_name,
                patient_name,
                diagnosis,
                medication,
                consultation_fee,
                follow_up_consultation,
                consultation_date_and_time,
            } = req.body
            if (
                !client_email ||
                !clinic ||
                !doctor_name ||
                !patient_name ||
                !diagnosis ||
                !medication ||
                !consultation_fee ||
                !follow_up_consultation ||
                !consultation_date_and_time
            ) {
                return res.status(400).json({ message: 'Invalid Input' })
            }

            const clientID = await this.clinicService.getClientIDByEmail(client_email)
            if (!clientID) {
                return res.status(400).json({ message: 'Invalid Client' })
            }
            await this.clinicService.clinicCreateRecord(
                clientID.id,
                clinic,
                doctor_name,
                patient_name,
                diagnosis,
                medication,
                consultation_fee,
                follow_up_consultation,
                consultation_date_and_time,
            )
            return res.status(200).json({ message: 'Create consultation record success' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Internal service error' })

        }
    }
}