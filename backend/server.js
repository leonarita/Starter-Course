const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const requireDir = require("require-dir")

//Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o BD --> mongod no cmd para ativar o servidor
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

requireDir('./src/models')

//Rotas
app.use("/api", require("./src/route"))

app.listen(3001)