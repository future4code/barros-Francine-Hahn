function printMath(n1:number, n2:number):void {
    
    console.log(`A soma dos números é ${n1 + n2}.`)
    console.log(`A subtração dos números é ${n1 - n2}.`)
    console.log(`A multiplicação dos números é ${n1 * n2}.`)

    if(n1 > n2) {
        console.log(`O maior número é ${n1}.`)
    } else if(n2 > n1) {
        console.log(`O maior número é ${n2}.`)
    } else {
        console.log('Os dois números são iguais.')
    }
}

printMath(10, 20)
printMath(10, 10)
printMath(50, 30)