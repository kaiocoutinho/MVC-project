const taskModel = require("../models/taskModel");
const adminController = {
  // Página GET /index
  index: (req, res) => {
    return res.render("index");
  },
  // GET /allList
  allList: (req, res) => {
    let allLists = taskModel.getAllList();
    res.render("allLists", { allLists });
  },
  // GET /newList
  newList: (req, res) => {
    return res.render("newList");
  },
  // POST /registerNewList
  registerNewList: (req, res) => {
    const { nameList } = req.body;
    const newTask = taskModel.newList(nameList);

    taskModel.saveList(newTask);

    return res.redirect("/allTasks");
  },
  // GET /getList/:id
  getList: (req, res) => {
    const id = req.params.id;
    let lists = taskModel.getList(id);
    return res.render("list", { lists });
  },
  //POST /addNewTask/:id
  registerTask: (req, res) => {
    const id = req.params.id;
    const { newTask } = req.body;

    taskModel.addNewTask(id, newTask);

    return res.redirect(`/list/${id}`);
  },
  finishTask:(req, res) => {
    const taskId = req.params.id;
    const nameList = req.params.nameList
    taskModel.finishTaskModel(nameList, taskId);
    
    return res.redirect("/allTasks")
  },
  inCompleteTask: (req,res) => {
    const taskId = req.params.id;
    const nameList = req.params.nameList
    taskModel.inCompleteTaskModel(nameList, taskId)

    return res.redirect("/allTasks")
  }

};

module.exports = adminController;
