import { User } from "../Model/User"


export function makePurchase(user: User, value: number): User | undefined {
	if (user.balance >= value) {
		return {
			name: user.name,
			balance: user.balance - value		
		}
	}

	return undefined
}