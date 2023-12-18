"use strict"

/* -------------------- INDEX ROUTE --------------- */

const router = require('express').Router()

// Auth:
router.use('/auth', require('./auth.js'))
// User:
router.use('/users', require('./user.js'))
// Token:
router.use('/tokens', require('./token'))
// Brand:
router.use('/brands', require('./brand.js'))
// Category:
router.use('/categories', require('./category.js'))
// Firm:
router.use('/firms', require('./firm.js'))
// Product:
router.use('/products', require('./product.js'))
// Purchase:
router.use('/purchases', require('./purchase.js'))
// Sale:
router.use('/sales', require('./sale.js'))

// Document:
router.use('/documents', require('./document.js'))



module.exports = router