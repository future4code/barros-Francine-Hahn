const returnAmountOfAnagrams = (word: string): number | string => {
    let equal = 0
    for(let i = 0; i < word.length; i++) {
        for (let c = i + 1; c < word.length; c++) {
            word[i].toLowerCase() === word[c].toLowerCase()? equal += 1 : equal += 0
        }
        if (equal > 0) break
    }
    
    if(equal) {
        return 'Por favor, escolha uma palavra sem letras repetidas.'
    } else {
        let factorial = 1
        for (let i = word.length; i > 0; i--) {
            factorial *= i
        }
        return factorial
    }
}

console.log(returnAmountOfAnagrams('Amor'))
console.log(returnAmountOfAnagrams('Casa'))
console.log(returnAmountOfAnagrams('Creta'))
console.log(returnAmountOfAnagrams('América'))