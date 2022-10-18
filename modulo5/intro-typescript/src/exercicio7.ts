function transformDNAtoRNA(dna:string):string {
    let list = dna.split('')
    const rna = list.map(item => {
        if(item === 'A') {
            return item = 'U'
        } else if (item === 'T') {
            return item = 'A'
        } else if (item === 'C') {
            return item = 'G'
        } else {
            return item = 'C'
        }
    })
    return rna.join('')
}

console.log(transformDNAtoRNA("ATTGCTGCGCATTAACGACGCGTA"))
