const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const data = require("./data")

server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", (req, res) => {
    const receitas = []

    for (let i = 0; i < 6; i++) {
        receitas.push(data[i])
    }

    res.render("home", {receitas})
})

server.get("/sobre", (req, res) => {
    res.render("sobre")
})

server.get("/receitas", (req, res) => {
    res.render("receitas")
})



server.listen(8000, () => {
    console.log("Server Running")
})