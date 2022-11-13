const express = require("express")
const router = express.Router()

const {
    getAllTodo,
    getTodoById,
    addTodo,
    deleteTodo,
    updateTodoById,
} = require('../controller/todo.controller')

router.get("/", getAllTodo);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodoById);

module.exports = router