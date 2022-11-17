# Relações SQL

## Exercício 1
### a) Explique o que é uma chave estrangeira
Uma chave estrangeira é um tipo de chave (key) que se refere à chave primária da outra tabela que está relacionada.

### b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
<pre>
    <code>
        CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
            comment TEXT NOT NULL,
            rate FLOAT NOT NULL,
            movie_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movies(id)
        )
    </code>
</pre>

INSERT INTO Rating VALUES ('001', 'Filme incrível e muito engraçado. Os atores são muito talentosos!', 10, '004'); 
INSERT INTO Rating VALUES ('002', 'Filme emocionante e inspirador!', 10, '002'); 
INSERT INTO Rating VALUES ('003', 'Filme nacional leve e divertido de assistir!', 8.7, '003'); 

### c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416211-francine-hahn`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

### d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movies DROP rating;

### e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416211-francine-hahn`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))


## Exercício 2
<pre>
    <code>
        CREATE TABLE MovieCast (
            movie_id VARCHAR(255),
            actor_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movies(id),
            FOREIGN KEY (actor_id) REFERENCES Actor(id)
        );
    </code>
</pre>

### a) Explique, com as suas palavras, essa tabela
A tabela possuirá duas colunas: uma que será a chave estrangeira ligada ao id do filme e outra que será a chave estrangeira ligada ao id do ator.

### b) Crie, ao menos, 6 relações nessa tabela
INSERT INTO MovieCast VALUES ('002', '003');
INSERT INTO MovieCast VALUES ('002', '004');
INSERT INTO MovieCast VALUES ('003', '001');
INSERT INTO MovieCast VALUES ('003', '002');
INSERT INTO MovieCast VALUES ('004', '004');
INSERT INTO MovieCast VALUES ('004', '007');

### c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416211-francine-hahn`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

### d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416211-francine-hahn`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))


## Exercício 3
<pre>
    <code>
        SELECT * FROM Movies 
        INNER JOIN Rating ON Movies.id = Rating.movie_id;
    </code>
</pre>

### a) Explique, com suas palavras, a query acima. O que é o operador ON?
O operador ON especifica a condição para que o join seja executado corretamente. No caso acima, estamos pedindo para que a tabela Movies seja mostrada juntamente com a tabela Rating, porém, especificando que a união deve ocorrer no caso onde o id do filme na tabela Movies (primary key) seja igual ao id do filme na tabela Rating (foreign key).

### b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT Movies.title, Movies.id, Rating.rate FROM Movies JOIN Rating ON Movies.id = Rating.movie_id;


## Exercício 4
### a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário
SELECT Movies.title, Movies.id, Rating.rate, Rating.comment FROM Movies LEFT JOIN Rating ON Movies.id = Rating.movie_id;

### b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator
SELECT MovieCast.movie_id, Movies.title, MovieCast.actor_id FROM Movies RIGHT JOIN MovieCast ON MovieCast.movie_id = Movies.id;

### c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)
SELECT AVG(Rating.rate), Movies.id, Movies.title FROM Movies LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);


## Exercício 5
<pre>
    <code>
        SELECT * FROM Movie m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id;
    </code>
</pre>

### a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
Precisamos usar dois JOIN porque temos que unir a tabela Movies com a MovieCast e após com a tabela Actor.

### b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query
SELECT Movies.id, Movies.title, Actor.id, Actor.actor_name FROM Movies LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

### c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
<pre>
    <code>
        SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movies m
        LEFT JOIN MovieCast mc ON m.id = mc.movie_id
        JOIN Actor a ON a.id = mc.actor_id;
    </code>
</pre>

Error Code: 1054. Unknown column 'm' in 'field list'
O erro ocorreu por causa do "m,title"

### d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)
SELECT Movies.title, Actor.actor_name, Rating.rate, Rating.comment FROM Movies
JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id
JOIN Rating ON Rating.movie_id = Movies.id;


## Exercício 6
### a) Que tipo de relação é essa?
Relação de m:n (muitos para muitos), pois um  filme pode receber vários Oscar e um Oscar pode ser dado para vários filmes.

### b) Explicite a query que você usou para criar a tabela
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    oscar_name VARCHAR(255) NOT NULL
);

CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
	oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);

### c) Crie ao menos 2 óscar para cada um dos filmes
INSERT INTO Oscar VALUES ('001', 'Oscar de melhor direção');
INSERT INTO Oscar VALUES ('002', 'Oscar de melhor filme');
INSERT INTO Oscar VALUES ('003', 'Oscar de melhor trilha sonora');
INSERT INTO Oscar VALUES ('004', 'Oscar de melhor atriz');
INSERT INTO Oscar VALUES ('005', 'Oscar de melhores efeitos especiais');
INSERT INTO Oscar VALUES ('006', 'Oscar de melhor enredo');

INSERT INTO MovieOscar VALUES ('002', '001');
INSERT INTO MovieOscar VALUES ('002', '004');
INSERT INTO MovieOscar VALUES ('003', '002');
INSERT INTO MovieOscar VALUES ('003', '005');
INSERT INTO MovieOscar VALUES ('004', '001');
INSERT INTO MovieOscar VALUES ('004', '006');

### d) Faça uma query que retorne todos os filmes e seus respectivos óscar
SELECT Movies.title, Oscar.oscar_name FROM Movies JOIN MovieOscar ON Movies.id = MovieOscar.movie_id
JOIN Oscar ON Oscar.id = MovieOscar.oscar_id;