export const determineHighestNumber = (array: number[], i: number = 0, highestNumber: number = 0): number => {
    if (i < array.length) {
        if (array[i] > highestNumber) highestNumber = array[i]
        return determineHighestNumber(array, i + 1, highestNumber)
    } else {
        return highestNumber
    }
}