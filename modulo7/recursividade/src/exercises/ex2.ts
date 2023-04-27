export const sumNumbersRecursive = (n: number, sum: number = 0): number => {
    if (n === 0) {
        return sum
    }

    return sumNumbersRecursive(n - 1, sum + n);
}