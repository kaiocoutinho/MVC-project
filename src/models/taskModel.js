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
    };
    lists.find((list) => list.id === id).tasks.push(newTask);
  },
};
module.exports = taskModel;
