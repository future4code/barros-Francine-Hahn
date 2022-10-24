const returnInfo = (name: string, date: string) :string => {
    const dateList = date.split('/')

    return `Olá, me chamo ${name}, nasci no dia ${dateList[0]} do mês ${dateList[1]} do ano de ${dateList[2]}.`
}

console.log(returnInfo('Francine', '04/06/1991'))