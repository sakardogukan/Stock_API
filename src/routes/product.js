"use strict"

/* ----------------- PRODUCT ROUTE ------------------- */

const router = require('express').Router()

const permissions = require('../middlewares/permissions')

const product = require('../controllers/product')

router.route('/')
    .get(permissions.isLogin, product.list)
    .post(permissions.isStaff, product.create)

router.route('/:id')
    .get(permissions.isLogin, product.read)
    .put(permissions.isStaff, product.update)
    .patch(permissions.isStaff, product.update)
    .delete(permissions.isAdmin, product.delete)

module.exports = router