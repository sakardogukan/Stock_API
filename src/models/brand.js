"use strict"

/* ----------------- BRAND MODEL ------------------- */

const { mongoose } = require('../config/dbConnection')

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: { // URL
        type: String,
        trim: true
    }
}, { collection: 'brands', timestamps: true, versionKey: false })

BrandSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model('Brand', BrandSchema)