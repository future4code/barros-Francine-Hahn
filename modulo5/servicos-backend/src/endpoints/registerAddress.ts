import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
import { connection } from "../data/connection"


const insertAddress = async (
        cep: string,
        logradouro: string,
        numero: number,
        complemento: string = "n/a",
        bairro: string,
        cidade: string,
        estado: string
    ) => {
    await connection.raw(`
        INSERT INTO AddressInfo (cep, logradouro, numero, complemento, bairro, cidade, estado)
        VALUES ('${cep}', '${logradouro}', ${numero}, '${complemento}', '${bairro}', '${cidade}', '${estado}');
    `)
}

export const registerAddress = async (req: Request, res: Response) => {
    const {cep, number, apartment} = req.body
    let errorCode = 400

    try {
        if (!cep) {
            errorCode = 422
            throw new Error("Informe o cep.")
        } else if (!number) {
            errorCode = 422
            throw new Error("Informe o número.")
        }

        const requestAddress = await getAddressInfo(cep)
        if(requestAddress.erro) {
            errorCode = 422
            throw new Error("Cep inexistente.")
        }

        insertAddress(cep, requestAddress.logradouro, number, apartment, requestAddress.bairro, requestAddress.localidade, requestAddress.uf)

        res.status(201).send('Cadastro realizado com sucesso.')
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}