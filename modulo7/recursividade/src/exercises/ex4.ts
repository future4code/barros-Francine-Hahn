export const printArrayElements = (array: any[], i: number = 0): void => {
    if (i < array.length) {
        console.log(array[i])
        printArrayElements(array, i + 1)
    }
}