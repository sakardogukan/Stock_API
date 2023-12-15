"use strict"
/* -------------------- INDEX.JS ------------------ */
//! Required Moduls:
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'
// console.log(process.env.PORT)
// console.log(process.env.HOST)

//! async-errors to errorHandler.js:
require('express-async-errors')
/* ------------------------------------------------ */









/* ------------------------------------------------ */
app.listen(PORT, () => console.log(`Running: http://${HOST}:${PORT}`))
