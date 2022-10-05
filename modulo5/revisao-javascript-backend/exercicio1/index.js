//Conversão de temperatura
const convertTemperature = (temperatureInCelsius, kOrF) => {
    let temperature

    if(typeof temperatureInCelsius === 'string' && (kOrF === "F" || kOrF === "K")) {
        return `Erro. Parâmetro inválido (${temperatureInCelsius}).`

    } else if(typeof temperatureInCelsius === 'number' && kOrF !== "F" && kOrF !== "K") {
        return `Erro. Parâmetro inválido (${kOrF}).`

    } else if(typeof temperatureInCelsius === 'number' && kOrF === "F") {
        temperature = (temperatureInCelsius * (9 / 5)) + 32
        return `${temperatureInCelsius}º Celsius é equivalente à ${temperature}º Farenheit.`

    } else if(typeof temperatureInCelsius === 'number' && kOrF === "K") {
        temperature = temperatureInCelsius + 273.15
        return `${temperatureInCelsius}º Celsius é equivalente à ${temperature.toFixed(2)} Kelvin.`

    } else {
        return `Erro. Parâmetros inválidos (${temperatureInCelsius}, ${kOrF}).`
    }
}

console.log(convertTemperature(30, "F"))
console.log(convertTemperature(30, "K"))
console.log(convertTemperature('trinta', "F"))
console.log(convertTemperature(30, "G"))
console.log(convertTemperature(30, "f"))
console.log(convertTemperature('trinta', "G"))