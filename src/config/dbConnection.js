"use strict"
/* ----------------- DB CONNECTION ---------------- */

const mongoose = require('mongoose')

const dbConnection = function () {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('* DB Connection *'))
        .catch((err) => console.log('DB Not Connection *', err))
}

module.exports = {
    mongoose,
    dbConnection
}