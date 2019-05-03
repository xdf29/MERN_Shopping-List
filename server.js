const express = require("express")
const body_parser = require("body-parser")
const mongoose = require("mongoose")
const item = require("./routes/api/items")

const app = express()

app.use(body_parser.json())

const db = require("./config/keys.js").mongoDB_URL

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("DB Connected ..."))
    .catch(err => console.log(err))

app.use("/api/items", item)
 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log("Server Is Running On Port "+ PORT)})



