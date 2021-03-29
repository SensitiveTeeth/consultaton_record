import { Request, Response } from 'express'
import { ClientService } from '../service/ClientService'

export function removeTrim(object: Object) {
    for (let item in object) {
        if (!!object[item] && object[item] !== null && isNaN(object[item])) {
            object[item] = object[item].trim()
        }
    }
    return object
}

export class ClientController {
    public constructor(private clientService: ClientService) {
    }
    testingGetAllUser = async (req: Request, res: Response) => {
        try {
            return res.json(await this.clientService.testingGetAllUser())
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Internal service error' })
        }
    }
    clientCreateAccount = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: 'Invalid input' })
            }
            req.body = removeTrim(req.body)
            const { email, password, clinic_name, phone_number, address } = req.body

            if (!email ||
                !password ||
                !clinic_name ||
                !phone_number ||
                !address) {
                return res.status(400).json({ message: 'Invalid input' })
            }
            const checkPhoneNumber = parseInt(phone_number)
            if ((checkPhoneNumber.toString()).length !== 8) {
                return res.status(400).json({ message: 'Invalid Phone number' })
            }
            const existCount = await this.clientService.getUserCountByEmail(email)
            if (existCount! === '0') {
                return res.status(400).json({ message: 'Email already exist' })
            }
            await this.clientService.clientCreateAccount(email, password, clinic_name, phone_number, address)
            return res.status(200).json({ message: 'Create account success' })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Internal service error' })
        }
    }

    getClientRecord = async (req: Request, res: Response) => {
        try {
            console.log(req.body)
            req.body = removeTrim(req.body)
            const { viewType, client } = req.body
            if (!viewType || !client) {
                return res.status(400).json({ message: 'Invalid input' })
            }
            const clientID = await this.clientService.getClientIDByEmail(client)
            if (viewType === 'daily') {
                const result = await this.clientService.GetClientDailyRecord(clientID)
                console.log(result)
                return res.json(result)
            }

            return
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Internal service error' })
        }
    }
}