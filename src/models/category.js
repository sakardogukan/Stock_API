"use strict"

/* ----------------- CATEGORY MODEL ---------------- */

const { mongoose } = require('../config/dbConnection')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
}, { collection: 'categories', timestamps: true, versionKey: false })

CategorySchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model('Category', CategorySchema)