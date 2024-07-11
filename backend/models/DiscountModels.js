const mongoose = require('mongoose')

const Schema = mongoose.Schema

const discountSchema = new Schema({
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



/*const SchemaDiscount = mongoose.Schema({




});

const discountmodel = mongoose.model("product", SchemaDiscount)*/