//one edit examples
//amor --> amora
//amor --> amo
//amor --> amar

export const oneEdit = (prevString: string, resultantString: string): boolean => {
    if (prevString === resultantString.slice(0, -1)) return true
    if (prevString.slice(0, -1) === resultantString) return true
    
    if (prevString.length === resultantString.length) {
        let differentChars = 0
        
        for (let i = 0; i < resultantString.length; i++) {
            if (prevString[i] !== resultantString[i]) differentChars += 1
        }

        if (differentChars < 2) return true
    }

    return false
}