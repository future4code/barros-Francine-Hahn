export const numberOfdigits = (n: number, count: number = 1): number => {
    if (n >= 10) {
        count += 1
        return numberOfdigits(n / 10, count)
    } else {
        return count
    }
}