const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reportSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    productid: {
        type: String,
        required: true
    },
    expdate: {
        type: String,
        required: true
    },
    retailprice: {
        type: String,
        required: true
    },
    discountprice: {
        type: String,
        required: true
    } 
}, { timestamps: true })

module.exports = mongoose.model('Discount', discountSchema)
