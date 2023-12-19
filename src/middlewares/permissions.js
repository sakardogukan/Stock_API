"use strict"

/* ----------------- PERMISSIONS ------------------ */

module.exports = {
    isLogin: (req, res, next) => {

        if (req.user && req.user.is_active) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: You must login.')
        }
    },
    isAdmin: (req, res, next) => {

        if (req.user && req.user.is_active && req.user.superadmin) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: You must login and to be admin.')
        }
    },
    isStaff: (req, res, next) => {

        if (req.user && req.user.is_active && (req.user.is_superadmin || req.user.is_staff)) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No permission: You must login and to be staff.')
        }
    }
}