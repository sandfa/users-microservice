import express, { Express } from "express"
import { connectToMongo } from "./db/mongodb"
require("dotenv").config()

const app: Express = express()

app.use(express.json())

//cors
const cors = require("cors")
app.use(cors())

// helmet
const helmet = require("helmet")
app.use(helmet())

const usersRouter = require("./routers/users.router")
app.use("/api/v1/", usersRouter)

connectToMongo()

app.listen(process.env.PORT, () => {
    console.log("Server running! http://localhost:" + process.env.PORT)
})

module.exports = app
