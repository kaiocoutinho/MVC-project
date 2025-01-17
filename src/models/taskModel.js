let lists = [];
const taskModel = {
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
  saveList: (list) => {
    lists.push(list);
  },
  getList: (id) => {
    return lists.find((list) => list.id === id);
  },
  addNewTask: (id, task) => {
    const newTask = {
      id: Date.now().toString(),
      taskName: task,
      completed: false,
      inCompleted: true
    };
    lists.find((list) => list.id === id).tasks.push(newTask);
  },
  finishTaskModel: (nameList,taskId) => {
    const list = lists.find((list) => list.nameList === nameList);
    const task = list.tasks.find((task) => task.id === taskId)

      task.completed = true;
      task.inCompleted = false
    
    console.log(task);
    
  },
  inCompleteTaskModel: (nameList, taskId) => {
    const list = lists.find((list) => list.nameList === nameList);
    const task = list.tasks.find((task) => task.id === taskId)

    if(task){
      task.completed = false;
      task.inCompleted = true
    }
    console.log(task);
    
  }
};
module.exports = taskModel;
