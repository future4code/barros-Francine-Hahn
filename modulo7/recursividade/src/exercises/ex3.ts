export const sumNumbersIterative = (n: number): number => {
    let sum = 0
    
    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum
}