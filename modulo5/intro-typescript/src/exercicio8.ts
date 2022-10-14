function returnReversedString(a:string):string {
    const list:string[] = a.split('')
    const reversedList:string[] = list.reverse()
    return reversedList.join('')
}

console.log(returnReversedString('abc'))
console.log(returnReversedString('amor'))