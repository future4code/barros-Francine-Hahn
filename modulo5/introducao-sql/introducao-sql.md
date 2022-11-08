# INTRODUÇÃO A SQL

* OBS: eu alterei a propriedade name para actor_name

## Exercício 1

<pre>
    <code> CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    ); </code>
</pre>

### a)
- CREATE TABLE é o comando para criar uma tabela;
- VARCHAR(n) é utilizado para determinar quantos caracteres terão uma string. O n é o n é o número de caracteres;
- PRIMARY KEY é um valor único utilizado para identificar cada dado dentro de uma tabela;
- DATE é usado para datas;
- NOT NULL é usado quando queremos que o dado não possa ser inserido sem nenhum valor.

### b)
- O comando SHOW DATABASES mostra todos os bancos de dados criados. Nesse caso, o resultado mostrado foi uma tabela com o schema (nome) da database criada (jbl-francine-hahn);
- O comando SHOW TABLES mostra todas as tabelas criadas dentro da database. Nesse caso, o resultado mostra a table Actors.

### c)
- O comando DESCRIBE nome_tabela descreve todos os dados da tabela criada. Os campos são o field (id, nome,salário...), type (tipo do dado), null (YES se for null e NO se não for null), Key (identifica se algum dos dados tem alguma chave, como a PRI de primary key), default (se algum dado tem algum valor como padrão caso nada seja inserido) e extra (se algum dado extra foi inserido, como auto_increment).


## Exercício 2

<pre>
    <code>INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
        VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");
    </code>
</pre>

### a)
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

### b)
INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("002", "Deborah Secco", 200000, "1979-11-26", "female");

- O erro ocorreu pois não é possível adicionar valores duplicados de id.

### c)
- O erro ocorreu pois foram adicionados valores de birth_date e gender, porém se especificá-los dentro do INSERT INTO.
A forma correta do comando seria:

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

### d)
- O erro demonstra que não é possível inserir dados na tabela sem o nome do ator. O comando correto seria:

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("004", "Antônio Fagundes", 400000, "1949-04-18", "male");

### e)
- O erro se deu pois a data deve estar entre aspas. Forma correta:

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

### f)

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("006", "Caio Castro", 600000, "1989-01-22", "male");

INSERT INTO Actor (id, actor_name, salary, birth_date, gender)
VALUES("007", "Bruna Marquezine", 700000, "1995-08-04", "female");

## Exercício 3

### a)
SELECT * FROM Actor WHERE gender = "female"

### b)
SELECT salary FROM Actor WHERE actor_name = "Tony Ramos"

### c)
SELECT * FROM Actor WHERE gender = "invalid"

- O retorno é uma tabela vazia, pois não há nenhum dado que o gender seja inválido.

### d)
SELECT id, actor_name, salary FROM Actor WHERE salary <= 500000

### e)
- O erro ocorreu pois não há a propriedade nome na tabela. O correto é:

SELECT id, actor_name from Actor WHERE id = "002"


## Exercício 4
SELECT * FROM Actor
WHERE (actor_name LIKE "A%" OR actor_name LIKE "J%") AND salary > 300000

### a)
- A query irá retornar todos os dados de atores e atrizes cujo nome inicia com a letra A ou com a letra J e que tenham um salário acima de 300.000. Nesse caso, o retorno deu Antonio Fagundes.

### b)
SELECT * FROM Actor WHERE actor_name NOT LIKE "A%" AND salary > 350000

### c)
SELECT * FROM Actor WHERE actor_name LIKE "%G%" OR actor_name LIKE "%g%"

### d)
SELECT * FROM Actor
WHERE (actor_name LIKE "%A%" OR actor_name LIKE "%a%" OR actor_name LIKE "%G%" OR actor_name LIKE "%g%") AND salary BETWEEN 350000 AND 900000


## Exercício 5
### a)
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

- VARCHAR foi usado para o id e para o título do filme, pois 255 caracteres é suficiente para esses valores;
- TEXT foi usado para a sinopse pois não tem um limite específico de tamanho além do máximo do banco de dados;
- A data de lançamento deve ser do tipo DATE;
- A avaliação é do tipo INT pois irá ter valores de 0 a 10.

### b)
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES('001', 'Se Eu Fosse Você', 'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos', '2006-01-06', 7);

### c)
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES('002', 'Doce de mãe', 'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela', '2012-12-27', 10);

### d)
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES('003', 'Dona Flor e Seus Dois Maridos', 'Dona Flor é uma sedutora professora de culinária casada com Vadinho,
que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.', '2017-11-02', 8);

### e)
INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES('004', 'Minha mãe é uma peça - o filme', 'Dona Hermínia (Paulo Gustavo) é uma mulher de meia idade, divorciada do marido (Herson Capri), que a trocou por uma mais jovem (Ingrid Guimarães). Hiperativa, ela não larga o pé de seus filhos Marcelina (Mariana Xavier) e
Juliano (Rodrigo Pandolfo), sem se dar conta que eles já estão bem grandinhos. Um dia, após descobrir que eles consideram ela uma chata,
resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido.
Mal sabem eles que a mãe foi visitar a querida tia Zélia (Sueli Franco) para desabafar com ela suas tristezas do presente e
recordar os bons tempos do passado.', '2013-06-21', 7);


## Exercício 6
### a)
SELECT id, title, rating FROM Movies WHERE id='002';

### b)
SELECT * FROM Movies WHERE title='Minha mãe é uma peça - o filme';

### c)
SELECT id, title, synopsis FROM Movies WHERE rating >= 7;


## Exercício 7
### a)
SELECT * FROM Movies WHERE title LIKE '%vida%';

### b)
SELECT * FROM Movies WHERE title LIKE '%mãe%' OR synopsis LIKE '%mãe%';

### c)
SELECT * FROM Movies WHERE release_Date < '2022-11-07';

### d)
SELECT * FROM Movies WHERE release_Date < '2022-11-07' AND rating > 7 AND (title LIKE '%doce%' OR synopsis LIKE '%doce%');