const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const users = [
    { id: 1, email: "farhan@gmail.com", password: "123" },
    { id: 2, email: "mirza@gmail.com", password: "123" },
];

const KEY = "123wertyasdf";

//http://localhost:3000/auth/login
router.post("/login", (req, res) => {
    // const data = req.body; 
    // kode di bawah sama saja seperti kita membuat sebuah variabel diatas
    // perbedaanya dibawah memanggil langsung var user
    const { email, password } = req.body;

    const userData = users.find(
        (item) => email === item.email &&
            JSON.stringify(password) === item.password
    );
    // const userData = users.find((item) => data.email === item.email)

    const token = jwt.sign({
        id: userData.id,
    }, KEY)

    if (userData) {
        return res.json({
            message: "sukses login",
            token,
        })
    } else {
        res.statusCode = 401
        return res.json({
            message: "email salah atau password salah",
        })
    }
})

//http://localhost:3000/auth/register
router.post("/register", (req, res) => {
    res.json({
        message: "sukses register",
    })
})

module.exports = router