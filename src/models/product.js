"use strict"

/* ----------------- PRODUCT MODEL ------------------- */

const { mongoose } = require('../config/dbConnection')

const ProductSchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    // quantity: {
    //     type: Number,
    //     default: 0
    // },
    stock: {
        type: Number,
        default: 0
    },

}, { collection: 'products', timestamps: true, versionKey: false })

ProductSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model('Product', ProductSchema)