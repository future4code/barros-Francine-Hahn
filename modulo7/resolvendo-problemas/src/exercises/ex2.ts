// bola --> b1o1l1a1 --> bola
// amoooooor --> a1m1o6r1

export const stringCompression = (string: string): string => {
    let newString = ""
    let equalChars = 2

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            equalChars += 1
        } else {
            newString += `${string[i]}${equalChars - 1}`
            equalChars = 2
        }
    }

    return newString.length > string.length? string : newString
}