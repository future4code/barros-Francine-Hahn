import { outputUserById, userRoles } from "../../src/model/User"

export const UserMock: outputUserById = {
    id: "id",
    name: "Fran Mock",
    email: "fran@mock",
    role: userRoles.NORMAL
}