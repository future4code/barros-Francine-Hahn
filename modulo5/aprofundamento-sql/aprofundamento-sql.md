# APROFUNDAMENTO SQL

## Exercício 1
### a) ALTER TABLE Actor DROP COLUMN salary;
- Esse comando irá apagar a coluna salary.

### b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
- Esse comando irá mudar o nome da coluna de gender para sex e manter varchar(6).

### c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
- Esse comando irá manter o nome da coluna gender e alterar para varchar(255).


## Exercício 2
### a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
- UPDATE Actor SET actor_name = "Marilu Bueno", birth_date = "1940-02-27" WHERE id = "003";

### b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
- UPDATE Actor SET actor_name = "JULIANA PAES" WHERE actor_name = "Juliana Paes";
- UPDATE Actor SET actor_name = "Juliana Paes" WHERE actor_name = "JULIANA PAES";

### c) Escreva uma query que atualize todas as informações do ator com o id 005
- UPDATE Actor SET actor_name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";


## Exercício 3
### a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
- DELETE FROM Actor WHERE actor_name = "Fernanda Montenegro";

### b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
- DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


## Exercício 4
### a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
- SELECT MAX(salary) FROM Actor;

### b) Escreva uma query que pegue o menor salário das atrizes
- SELECT MIN(salary) FROM Actor WHERE gender = "female";

### c) Escreva uma query que pegue a quantidade de atrizes
- SELECT COUNT(*) FROM Actor WHERE gender = "female";

### d) Escreva uma query que pegue a soma de todos os salários
- SELECT SUM(salary) from Actor;


## Exercício 5
<pre>
    <code>
        SELECT COUNT(*), gender
        FROM Actor
        GROUP BY gender    
    </code>
</pre>

### a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
- Serão mostradas duas colunas: count e gender;
- Os dados serão agrupados entre os gêneros;
- Ou seja, serão mostradas quantas pessoas (count) tem em cada grupo (gênero).

### b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
- SELECT id, actor_name FROM Actor ORDER BY actor_name DESC;

### c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário
- SELECT * FROM Actor ORDER BY salary ASC;

### d) Faça uma query que retorne as pessoas atoras com os três maiores salarios
- SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

### e) Faça uma query que retorne a média de salário por gênero
- SELECT AVG(salary), gender FROM Actor GROUP BY gender;


## Exercício 6
### a) Altere a tabela de Movies e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
- ALTER TABLE Movies ADD playing_limit_date DATE;

### b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
- ALTER TABLE Movies CHANGE avaliacao rating FLOAT;

### c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído
- UPDATE Movies SET playing_limit_date = 2022-11-20" WHERE id = "001";
- UPDATE Movies SET playing_limit_date = 2022-11-02" WHERE id = "002";

### d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
- DELETE FROM Movies WHERE id = "001";
- UPDATE Movies SET synopsis = "Nova sinopse do filme deletarde com id 001." WHERE id = "001";
- Resultado: 0 row(s) affected Rows matched: 0  Changed: 0
- O resultado mostra que o comando rodou, porém nada foi atualizado, já que o id não existe mais.

## Exercício 7
### a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
- SELECT COUNT(*) FROM Movies WHERE rating > "7.5";
- 2 filmes

### b) Qual a média das avaliações dos filmes?
- SELECT AVG(rating) FROM Movies;
- Média: 8,3

### c) Qual a quantidade de filmes em cartaz?
- SELECT COUNT(*) FROM Movies;
- 3 filmes

### d) Qual a quantidade de filmes que ainda irão lançar?
- SELECT COUNT(*) FROM Movies WHERE release_Date > CURDATE();
- Nenhum filme.

### e) Qual a maior nota dos filmes?
- SELECT MAX(rating) FROM Movies;
- Nota 10.

### f) Qual a menor nota dos filmes?
- SELECT MIN(rating) FROM Movies;
- Nota 7.


## Exercício 8
### a) Retorne todos os filmes em ordem alfabética
- SELECT * FROM Movies ORDER BY title ASC; 

### b) Retorne os 5 primerios filmes em ordem descrente alfabética 
- SELECT * FROM Movies ORDER BY title DESC LIMIT 5;

### c) Retorne os 3 filmes mais recentes em cartaz
- SELECT * FROM Movies WHERE release_Date < CURDATE() ORDER BY release_Date DESC LIMIT 3;

### d) Retorne os 3 filmes melhor avalidos
- SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
