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
    // Validação
    if(req.body.nameList === ''){
      console.error("Erro, Você precisa dar um nome a essa Lista.");
      res.redirect("/newList")
    } else {
      const { nameList } = req.body;
      const newTask = taskModel.newList(nameList);

      taskModel.saveList(newTask);

      return res.redirect("/newList")
    }
    
  },
  // GET /getList/:id
  // Pegar alguma lista especifica pelo id
  getList: (req, res) => {
    const id = req.params.id;
    let lists = taskModel.getListById(id);
    return res.render("list", { lists });
  },

  // Deletar uma Lista
  deleteList: (req, res) => {
    const idList = req.params.id

    taskModel.excludeListModel(idList)
    
    return res.redirect("/allTasks")
  },
  //POST /addNewTask/:id
  // Adicionar uma tarefa em alguma Lista
  registerTask: (req, res) => {
    const id = req.params.id;
    const { newTask } = req.body;

    taskModel.addNewTask(id, newTask);

    return res.redirect(`/list/${id}`);
  },

  // Botão para finalizar alguma tarefa
  finishTask:(req, res) => {
    const taskId = req.params.id;
    const nameList = req.params.nameList
    const listShow = taskModel.getListByName(nameList)
    taskModel.finishTaskModel(nameList, taskId);
    
    return res.redirect(`/list/${listShow.id}`)
  },

  // Botão para desfinalizar a tarefa
  inCompleteTask: (req,res) => {
    const taskId = req.params.id;
    const nameList = req.params.nameList
    const listShow = taskModel.getListByName(nameList)
    taskModel.inCompleteTaskModel(nameList, taskId)

    return res.redirect(`/list/${listShow.id}`)
  }

};

module.exports = adminController;
