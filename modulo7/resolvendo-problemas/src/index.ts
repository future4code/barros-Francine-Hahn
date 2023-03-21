import { oneEdit } from "./exercises/ex1"
import { stringCompression } from "./exercises/ex2"
import { returnUpdatedMatrix } from "./exercises/ex3"
import { sumTwoMatrix, transposedMatrix } from "./exercises/ex4"
import { negativeNumbersInAmatrix } from "./exercises/ex5"

//Testing exercise 1
console.log("expected TRUE, received", oneEdit("amor", "amora"))
console.log("expected TRUE, received", oneEdit("amora", "amor"))
console.log("expected TRUE, received", oneEdit("amor", "amar"))
console.log("expected FALSE, received", oneEdit("amoraaa", "amora"))
console.log("expected FALSE, received", oneEdit("amora", "amoraaa"))
console.log("expected FALSE, received", oneEdit("amora", "amare"))

//Testing exercise 2
console.log("expected a1m1o8r1, received", stringCompression("amoooooooor"))
console.log("expected amor, received", stringCompression("amor"))
console.log("expected a2c3d4e5, received", stringCompression("aacccddddeeeee"))
console.log("expected m1a3r1a2v1i4l1h1a4, received", stringCompression("maaaraaviiiilhaaaa"))
console.log("expected maravilhhaa, received", stringCompression("maravilhhaa"))

//Testing exercise 3
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log("Expected [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 26, 12], [13, 14, 15, 16] ] and received", returnUpdatedMatrix(matrix, 2, 2, 26))
console.log("Expected and error and received", returnUpdatedMatrix(matrix, 10, 2, 26))

//Testing exercise 4
// b
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("Expected [ [2, 4, 6], [8, 10, 12], [14, 16, 18] ] and received", sumTwoMatrix(matrix1, matrix2))
console.log("Expected an error and received", sumTwoMatrix(matrix, matrix2))

// c
console.log("Expected [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ] and received", transposedMatrix(matrix1))

//Testing exercise 5
const matrix3 = [
    [-10, -5, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("Expected 0 and received", negativeNumbersInAmatrix(matrix1))
console.log("Expected 2 and received", negativeNumbersInAmatrix(matrix3))