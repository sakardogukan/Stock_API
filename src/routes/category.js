"use strict"

/* ----------------- CATEGORY ROUTE ------------------- */

const router = require('express').Router()

const permissions = require('../middlewares/permissions')

const category = require('../controllers/category')

router.route('/')
    .get(permissions.isStaff, category.list)
    .post(permissions.isAdmin, category.create)

router.route('/:id')
    .get(permissions.isStaff, category.read)
    .put(permissions.isAdmin, category.update)
    .patch(permissions.isAdmin, category.update)
    .delete(permissions.isAdmin, category.delete)

module.exports = router