"use strict"

/* -------------------- INDEX ROUTE --------------- */

const router = require('express').Router()



// User:'
router.use('/users', require('./user.js'))

// Document:
router.use('/documents', require('./document.js'))

module.exports = router