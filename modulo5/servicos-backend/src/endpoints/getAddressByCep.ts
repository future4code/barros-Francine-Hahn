import {Request, Response} from 'express'
import { getAddressInfo } from '../services/getAddressInfo'


export const getAddressByCep = async (req: Request, res: Response) => {
    const {cep} = req.body
    let errorCode = 400

    try {
        if(!cep) {
            errorCode = 422
            throw new Error("Informe o cep.")
        }

        const fullAddress = await getAddressInfo(cep)
        const result = {
            logradouro: fullAddress.logradouro,
            bairro: fullAddress.bairro,
            cidade: fullAddress.localidade,
            estado: fullAddress.uf
        }
        console.log(result)
        res.status(200).send(result)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}