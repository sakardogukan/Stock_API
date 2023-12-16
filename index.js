"use strict"

/* -------------------- INDEX.JS ------------------ */
//! Required Moduls:
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'
console.log(process.env.PORT)
console.log(process.env.HOST)

//! async-errors to errorHandler.js:
require('express-async-errors')

/* ------------------------------------------------ */
//! Configuration:

//? Cors Config:
var cors = require('cors')
app.use(cors())

//? DB Connection:
const { dbConnection } = require('./src/config/dbConnection')
dbConnection()

/* ------------------------------------------------ */
//! Middlewares:

//? Accept JSON:
app.use(express.json())



//? Run Logger:
app.use(require('./src/middlewares/logger'))

//? Searching&Sorting&Paginations: res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))


/* ------------------------------------------------ */
//! Routes:

//? Home Path:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Stock API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json'
        }
    })
})


//? Routes:
app.use(require('./src/routes/index'))

/* ------------------------------------------------ */
//? Error Handler:
app.use(require('./src/middlewares/errorHandler'))

//? Run Server:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))