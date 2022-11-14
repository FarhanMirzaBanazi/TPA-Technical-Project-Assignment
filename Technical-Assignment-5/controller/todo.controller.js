const todo = require("../models/todo")

module.exports = {

    getAllTodo: async (req, res) => {
        try {
            const data = await todoSchema.find({});

            if (data) {
                res.json({
                    message: 'Todo telah terambil'
                })
            } else {
                res.status(400).json({
                    message: 'Todo tidak di temukan'
                })
            }
        } catch (error) {
            res.send(error);
        }
    },

    addTodo: (req, res) => {
        const data = req.body
        const createTodo = new todo(data)

        console.log(createTodo);
        // TODO.save()

        res.json({
            messange: "Todo telah di tambahkan"
        })
    },
    deleteTodoById: (req, res) => { },

    updateTodoById: async (req, res) => {
        const { judulTodo, detailTodo } = req.body;
        try {
            const dataTodo = await todoSchema.findOne({ _id: req.query.idTodo });

            if (dataTodo) {
                dataTodo.todo = judulTodo,
                    dataTodo.detail = detailTodo;

                res.json({
                    message: 'Todo is updated successfully'
                })
            } else {
                res.status(400).json({
                    message: 'Todo tidak ditemukan'
                })
            }
        } catch (error) {
            res.send(error);
        }
    },

}