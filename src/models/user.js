"use strict"

/* ---------------- USER MODEL -------------------- */
/*
    Examples Data:

    {
        "username": "admin",
        "password": "aA*123456",
        "email": "admin@site.com",
        "first_name": "admin",
        "last_name": "admin",
        "is_active": true,
        "is_staff": true,
        "is_superadmin": true
    }

    {
        "username": "test",
        "password": "aA*123456",
        "email": "test@site.com",
        "first_name": "test",
        "last_name": "test",
        "is_active": true,
        "is_staff": true,
        "is_superadmin": false
    }

*/


const { mongoose } = require('../config/dbConnection')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    is_staff: {
        type: Boolean,
        default: false,
    },
    is_superadmin: {
        type: Boolean,
        default: false,
    },
}, { collection: 'users', timestamps: true, versionKey: false})

/* ------------------------------------ */
const passwordEncrypt = require('../helpers/passwordEncrypt')

UserSchema.pre(['save', 'updateOne'], function (next) {

    const data = this._update || this

    const isEmailValidated = data.email
        ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
        : true

    if (isEmailValidated) {
        const isPasswordValidated = data?.password
            ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/.test(data.password) : true

        if (isPasswordValidated) {
            if (data?.password) {
                this.password = data.password = passwordEncrypt(data.password)
                this._update = data // updateOne will wait data from "this._update".
            }
            next() // Allow to save.
        } else {
            next(new Error('Password not validated.'))
        }

    } else {
        next(new Error('Email not validated.'))
    }
})
/* ------------------------------------ */

// For REACT project:

// Veri tabanına dokunmadan frontend'in istediği id ve createds verilerini göndermek için pre-init kullanılır. Yukarıdaki model içinde "id" field'ı açılıp " default: function() {return this_id} " ile istenilen sonuç elde edilir fakat veritabanında gereksiz yere field açılmış olur.
UserSchema.pre('init', function(data){
    data.id = data.id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})
/* ------------------------------------ */

module.exports = mongoose.model('User', UserSchema)