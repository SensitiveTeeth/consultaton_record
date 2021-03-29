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
            return res.status(500).json({ error: 'Internal service error' })

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
            return res.status(200).json({ message: 'Success' })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Internal service error' })
        }
    }
    // getUserCountByEmail = async (req: Request, res: Response) => {
    //     try {
    //         let { email } = req.body
    //         if (!email) {
    //             return res.status(500).json({ error: 'Invalid input' })
    //         }
    //         email = email.trim()
    //         const result = await this.clientService.getUserCountByEmail(email)
    //         return res.json(result)
    //     } catch (err) {
    //         console.log(err)
    //         return res.status(500).json({ error: 'Internal service error' })

    //     }
    // }
}