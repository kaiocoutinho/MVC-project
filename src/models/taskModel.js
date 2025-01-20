let lists = [];
const taskModel = {
  //Criar uma lista
  newList: (nameList) => {
    const newTask = {
      id: Date.now().toString(),
      nameList: nameList,
      tasks: [],
    };
    return newTask;
  },
  getAllList: () => {
    return lists;
  },
  //Salvar lista no array
  saveList: (list) => {
    lists.push(list);
  },
  //Pega lista especifica pelo seu Id
  getListById: (id) => {
    return lists.find((list) => list.id === id);
  },
  //Pegar lista especifica pelo seu nome
  getListByName:(nameList)=>{
    return lists.find((list) => list.nameList === nameList)
  },
  //Adicionar uma terefa em uma lista passando o id da lista(idList) e a conteudo da tarefa(task)
  addNewTask: (idList, task) => {
    const newTask = {
      id: Date.now().toString(),
      taskName: task,
      completed: false,
      inCompleted: true
    };
    lists.find((list) => list.id === idList).tasks.push(newTask);
  },
  // Informar o nome da lista(nameList) e o id da tareka(taskId) para mudar o status para "completo"
  finishTaskModel: (nameList,taskId) => {
    const list = lists.find((list) => list.nameList === nameList);
    const task = list.tasks.find((task) => task.id === taskId)

      task.completed = true;
      task.inCompleted = false
  },
  // Informar o nome da lista(nameList) e o id da tareka(taskId) para mudar o status para "desfazer"
  inCompleteTaskModel: (nameList, taskId) => {
    const list = lists.find((list) => list.nameList === nameList);
    const task = list.tasks.find((task) => task.id === taskId)

    if(task){
      task.completed = false;
      task.inCompleted = true
    }
  },
  // Excluir uma tarefa passando o seu id(listId)
  excludeListModel: (listId) => {
    const list = lists.findIndex((list) => {
      return list.id === listId
    });
    lists.splice(list, 1);
  }
};
module.exports = taskModel;
