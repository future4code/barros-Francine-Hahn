import { character } from "../model/character"


export const validateCharacter = (input: character): boolean => {
    
    if (
        !input.defense ||
        !input.life ||
        !input.name ||
        !input.strength ||
        input.defense <= 0 ||
        input.life <= 0 ||
        input.strength <= 0 ||
        input.name === ""
    ) {
        return false
    }

    return true
}