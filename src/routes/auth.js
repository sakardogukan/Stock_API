"use strict"

/* ----------------- AUTHORIZATION ROUTE------------------- */

const router = require('express').Router()

const auth = require('../controllers/auth')

router.post('/login', auth.login)
//? Swagger'da sadece "get" ve "post" metotları yakalanabilmektedir. Bu nedenle logout'da get ve post kullanıldı.
router.get('/logout', auth.logout) 
router.post('/logout', auth.logout)

module.exports = router