const mongoose = require('mongoose')

const Schema = mongoose.Schema

const campaignSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    occation: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Campaign', campaignSchema)