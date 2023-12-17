"use strict"

/* -------------------- TOKEN MODEL ---------------- */

const { mongoose } = require('../config/dbConnection')

const TokenSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    token: {
        type: String,
        trim: true,
        required: true,
        index: true
    }
}, { collection: 'tokens', timestamps: true, versionKey: false })

TokenSchema.pre('init', function (data) {
    data.id = data._id
    data.createds = data.createdAt.toLocaleString('tr-tr')
})

module.exports = mongoose.model('Token', TokenSchema)