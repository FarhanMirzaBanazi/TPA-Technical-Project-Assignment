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

const todo = mongoose.Aggregate.model("todo", todoSchema)

module.exports = todo

