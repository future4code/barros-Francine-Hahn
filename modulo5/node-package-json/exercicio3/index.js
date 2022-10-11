//Exercício 3
/*Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável
que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista,
exiba a lista atualizada.*/
const listOfTasks = ['Passear com cachorro', 'Limpar a casa']
const task = process.argv[2]

const addTask = (task) => {
    listOfTasks.push(task)
    console.log('Tarefa adicionada com sucesso!')
    console.log("Tarefas:", listOfTasks)
}

addTask(task)