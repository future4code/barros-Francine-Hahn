// a. Uma matriz pode ser representada como um array de vários arrays que representam as linhas.
/* [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]*/


// b.
export const returnUpdatedMatrix = (matrix: number[][], line: number, column: number, value: number): number[][] | string => {
    if (!matrix[column] || !matrix[line]) return "Fora do intervalo da matriz"
    matrix[line][column] = value
    return matrix
}