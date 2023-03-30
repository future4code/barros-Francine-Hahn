import { printNumbersInAscendingOrder, printNumbersInDescendingOrder } from "./exercises/ex1"
import { sumNumbersRecursive } from "./exercises/ex2"
import { sumNumbersIterative } from "./exercises/ex3"
import { printArrayElements } from "./exercises/ex4"
import { numberOfdigits } from "./exercises/ex5"
import { determineHighestNumber } from "./exercises/ex6"
import { firstUpperCase } from "./exercises/ex7"

console.log("Order crescente:")
printNumbersInAscendingOrder(10)

console.log("Order decrescente:")
printNumbersInDescendingOrder(10)

console.log("Soma dos números inteiros:", sumNumbersRecursive(5))
console.log("Soma dos números inteiros:", sumNumbersIterative(5))

printArrayElements(["Olá", "tudo", "bem?", "Eu", "tenho", 31, "anos"])

console.log("Número de dígitos:", numberOfdigits(0))
console.log("Número de dígitos:", numberOfdigits(10))
console.log("Número de dígitos:", numberOfdigits(5000))
console.log("Número de dígitos:", numberOfdigits(1000000))

console.log("Maior número do array:", determineHighestNumber([10, 0, 5, 400, 29, 120, 78]))

console.log("Primeira letra maiúscula:", firstUpperCase("cavAlo"))
console.log("Primeira letra maiúscula:", firstUpperCase("cachoRro"))
console.log("Primeira letra maiúscula:", firstUpperCase("Amor"))