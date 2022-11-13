const express = require('express');
const router = express.Router();

const movie = [
    { id: 1, nama: "spiderman" }
]

// http://localhost:3000/movies
router.get("/", (req, res) => {
    res.json({
        data: movie,
        message: "movies",
    })
})

module.exports = router