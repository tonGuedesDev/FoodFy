const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    res.render("home")
})

server.get("/sobre", (req, res) => {
    res.render("sobre")
})

server.get("/receitas", (req, res) => {
    res.render("receitas")
})

server.listen("9999", () => {
    console.log("Server Running")
})