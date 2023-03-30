export const firstUpperCase = (string: string, i: number = 0): string => {
    if (string[i].toUpperCase() === string[i]) {
        return string[i]
    } else {
        return firstUpperCase(string, i + 1)
    }
}