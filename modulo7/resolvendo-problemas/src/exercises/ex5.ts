export const negativeNumbersInAmatrix = (matrix: number[][]): number => {
    let count = 0

    for (let l = 0; l < matrix.length; l++) {
        for (let c = 0; c < matrix[l].length; c++) {
            if (matrix[l][c] < 0) count += 1
        }
    }

    return count
}