### Exercício 1
- a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
R: Round é o cost. O cost é um valor numérico que quanto mais alto, maior será o tempo de execução do algoritmo e maior será a segurança do hash criado. O valor padrão para o cost é 12 e por isso é o valor que eu utilizei. Deve-se sempre cuidar para não usar um valor muito baixo para não comprometer a segurança do hash e nem um valor muito alto que irá travar o servidor ou fazer com que o tempo de execução do algoritmo dure minutos. Nesse caso, deve-se sempre avaliar o melhor custo-benefício.

O salt é uma string aleatória gerada antes do hash. Assim, a biblioteca evita que o hash seja sempre o mesmo para senhas iguais. É uma forma de aumentar ainda mais a segurança do hash gerado e previnir ataques rainbow table.

### Exercício 2
- a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
R: Devemos modificar primeiro o cadastro, pois ele irá gerar o hash e salvar no banco de dados para que posteriormente, no login, possamos compará-los.

- d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
R: Não, pois o endpoint user/profile lida apenas com o token e não com a croptografia da senha.