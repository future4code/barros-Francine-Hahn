import { UserBusiness } from "../business/UserBusiness"
import { inputLoginDTO } from "../Model/User"


export const login = async (newLogin: inputLoginDTO) => {
    const userBusiness = new UserBusiness()
    const result = await userBusiness.login(newLogin)
    return result
}