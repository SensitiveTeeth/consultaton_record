import { Request, Response } from 'express'
import { ClientService } from '../service/ClientService'


export class ClientController {
    public constructor(private clientService: ClientService) {
    }
    testingGetAllUser = async (req: Request, res: Response) => {
        try {
            return res.json(await this.clientService.testingGetAllUser())
        } catch (err) {
            return res.status(500).json({ error: 'internal service error' })

        }
    }
}