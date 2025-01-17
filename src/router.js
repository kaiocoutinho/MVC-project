const express = require("express");
const adminController = require("./controllers/adminController");
const router = express.Router();

router.get("/", adminController.index);

router.get("/alltasks", adminController.allList);
router.get("/newList", adminController.newList);
router.get("/list/:id", adminController.getList);

router.post("/registerNewList", adminController.registerNewList);
router.post("/addNewTask/:id", adminController.registerTask);
router.post("/finishTask/:nameList/:id", adminController.finishTask)
router.post("/deleteTask/:nameList/:id", adminController.inCompleteTask)

module.exports = router;
