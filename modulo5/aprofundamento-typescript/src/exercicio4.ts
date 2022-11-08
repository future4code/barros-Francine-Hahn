type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Para converter esse arquivo ts em js é só digitar no terminal: tsc exercicio4.ts

//c) Sim, seria diferente, pois no arquivo tsconfig.json, estipulamos que o outDir seria ./build. Então nesse arquivo teríamos que alterar o outDir para ./src/build

//d) Para trabspilar vários arquivos de ts para js é só digitar no terminal: tsc OU tsc exercicio1.ts exercicio2.ts exercicio3.ts exercicio4.ts
