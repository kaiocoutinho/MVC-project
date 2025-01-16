const taskModel = require("../models/taskModel");
const adminController = {
  index: (req, res) => {
    return res.render("index");
  },
  allList: (req, res) => {
    let allLists = taskModel.getAllList();
    res.render("allLists", { allLists });
  },
  newList: (req, res) => {
    return res.render("newList");
  },
  registerNewList: (req, res) => {
    const { nameList } = req.body;
    const newTask = taskModel.newList(nameList);

    taskModel.saveList(newTask);

    return res.redirect("/allTasks");
  },
  getList: (req, res) => {
    const id = req.params.id;
    let lists = taskModel.getList(id);
    return res.render("list", { lists });
  },
  registerTask: (req, res) => {
    const id = req.params.id;
    const { newTask } = req.body;

    taskModel.addNewTask(id, newTask);

    return res.redirect(`/list/${id}`);
  },
};

module.exports = adminController;
