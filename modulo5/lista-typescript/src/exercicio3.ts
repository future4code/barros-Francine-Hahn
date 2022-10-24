enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    name: string,
    yearOfRelease: number,
    genre: GENERO,
    points?: number
}

const listOfMovies: Movie[] = [
    {
        name: 'O diabo veste prada',
        yearOfRelease: 2005,
        genre: GENERO.COMEDIA,
        points: 90
    }, 
    {
        name: 'Diário de uma paixão',
        yearOfRelease: 1995,
        genre: GENERO.DRAMA,
    }
]

const returnMovieInfo = ({name, yearOfRelease, genre, points}:Movie) => {
    if (points) {
        return ({
            nome: name,
            anoLancamento: yearOfRelease,
            genero: genre,
            pontuacao: points
        })
    } else {
        return ({
            nome: name,
            anoLancamento: yearOfRelease,
            genero: genre
        })
    }
}

console.log(returnMovieInfo(listOfMovies[0]))
console.log(returnMovieInfo(listOfMovies[1]))