"use strict"

/* -------------------- INDEX ROUTE --------------- */

const router = require('express').Router()





// Document:
router.use('/documents', require('./document.js'))

module.exports = router