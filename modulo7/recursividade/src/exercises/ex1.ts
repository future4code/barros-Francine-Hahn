export const printNumbersInAscendingOrder = (n: number, i: number = 0) => {
    if (i <= n) {
        console.log(i)
        printNumbersInAscendingOrder(n, i + 1)
    }
}

export const printNumbersInDescendingOrder = (n: number) => {
    if (n >= 0) {
        console.log(n)
        printNumbersInDescendingOrder(n - 1)
    }
}