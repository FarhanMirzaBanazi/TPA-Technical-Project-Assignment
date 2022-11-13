const todo = require("../models/todo")

module.exports = {
    getAllTodo: (req, res) => { },
    getTodoById: (req, res) => { },
    addTodo: (req, res) => {
        const data = req.body
        const Todo = new TODO(data)

        console.log(Todo);
        // TODO.save()

        res.json({
            messange: "Todo telah di tambahkan"
        })
    },
    deleteTodoById: (req, res) => { },
    updateTodoById: (req, res) => { },

}