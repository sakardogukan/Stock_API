"use strict"

/* ----------------- SALE MODEL ------------------- */

const { mongoose } = require('../config/dbConnection')

const SaleSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    brand_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    price_total: {
        type: Number,
        default: function () { return this.price * this.quantity }, // For Create
        transform: function () { return this.price * this.quantity }, // For Update
        // set: function () { return this.price * this.quantity } // For sendingData // FrontEnd not sending data
    }
}, { collection: 'sales', timestamps: true, versionKey: false })

SaleSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleDateString('tr-tr')
})

module.exports = mongoose.model('Sale', SaleSchema)