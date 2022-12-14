const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
    judul: String,
    deskripsi: {
        type: String,
        required: true
    },
    password: String,
})

const todo = mongoose.model("todo", todoSchema)

module.exports = todo

