"use strict"

/* ----------------- BRAND ROUTE ------------------- */

const router = require('express').Router()

const permissions = require('../middlewares/permissions')

const brand = require('../controllers/brand')

router.route('/')
    .get(permissions.isStaff, brand.list)
    .post(permissions.isAdmin, brand.create)

router.route('/:id')
    .get(permissions.isStaff, brand.read)
    .put(permissions.isAdmin, brand.update)
    .patch(permissions.isAdmin, brand.update)
    .delete(permissions.isAdmin, brand.delete)

module.exports = router