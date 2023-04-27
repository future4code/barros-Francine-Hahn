// a.
export const returnMatrix = (matrix: number[][]): number[][] => {
    return matrix
}

//b.
export const sumTwoMatrix = (matrix1: number[][], matrix2: number[][]): number[][] | string=> {
    if (matrix1.length !== matrix2.length) return "Não é possível realizar essa soma"
    
    const newMatrix = []
    for (let l = 0; l < matrix1.length; l++) {
        if (matrix1[l].length !== matrix2[l].length) return "Não é possível realizar essa soma"

        const newLine = []
        for (let c = 0; c < matrix1[l].length; c++) {
            newLine.push(matrix1[l][c] + matrix2[l][c])
        }
        newMatrix.push(newLine)
    }

    return newMatrix
}

//c.
export const transposedMatrix = (matrix: number[][]): number[][] => {
    const newMatrix = []

    for (let c = 0; c < matrix.length; c++) {
        const newLine = []

        for (let l = 0; l < matrix.length; l++) {
            newLine.push(matrix[l][c])
        }
        newMatrix.push(newLine)
    }

    return newMatrix
}

