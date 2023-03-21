import { Casino, country, nationality, UserCasino } from "../Model/Casino"

interface Result {
    brazilians: ResultItem
    americans: ResultItem
}
  
interface ResultItem {
    allowed: string[]
    unallowed: string[]
}

export const verifyAge = (casino: Casino, users: UserCasino[]): Result => {
    const allowed: UserCasino[] = []
    const unallowed: UserCasino[] = []

    for (const user of users) {
        if (casino.country === country.USA) {
            user.age >= 21 ? allowed.push(user) : unallowed.push(user)
        } else if (casino.country === country.BRAZIL) {
            user.age >= 18 ? allowed.push(user) : unallowed.push(user)
        }
    }

    const braziliansAllowed = allowed.filter(user => user.nationality === nationality.BRAZILIAN).map(user => user.name)
    const americansAllowed = allowed.filter(user => user.nationality === nationality.AMERICAN).map(user => user.name)

    const braziliansUnallowed = unallowed.filter(user => user.nationality === nationality.BRAZILIAN).map(user => user.name)
    const americansUnallowed = unallowed.filter(user => user.nationality === nationality.AMERICAN).map(user => user.name)

    const result = {
        brazilians: {
            allowed: braziliansAllowed,
            unallowed: braziliansUnallowed
        },
        americans: {
            allowed: americansAllowed,
            unallowed: americansUnallowed
        }
    }

    return result
}