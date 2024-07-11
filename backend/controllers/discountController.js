const Discount = require('../models/DiscountModels')
const mongoose = require('mongoose')

//get all discounts
const getDiscounts = async (req, res) => {
   const discounts = await Discount.find({}).sort({createdAt: -1})

   res.status(200).json(discounts)
}

 

//get a single discount
const getDiscount = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such discount'})
    }

    const discount = await Discount.findById(id)

    if (!discount) {
        return res.status(404).json({error: 'No such discount'})
    }

    res.status(200).json(discount)
}



//create a discount

/*app.post("/createDiscount",(req, res) => {
    console.log(req.body)
})*/

const createDiscount = async (req, res) => {
    const { image, productid, retailprice, discountprice, expdate } = req.body

    let emptyFields = []

    if(!image) {
        emptyFields.push('image')
    }
    if(!productid) {
        emptyFields.push('productid')
    }
    
    if(!retailprice) {
        emptyFields.push('retailprice')
    }
    if(!discountprice) {
        emptyFields.push('discountprice')
    }
    if(!expdate) {
        emptyFields.push('expdate')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    
    //add doc to db
    try {
      const discount = await Discount.create({image, productid, retailprice, discountprice, expdate})
      res.status(200).json(discount)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}


 
//delete a discount
const deleteDiscount = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such discount'})
    }

    const discount = await Discount.findOneAndDelete({_id: id})

    if (!discount) {
        return res.status(404).json({error: 'No such discount'})
    }

    res.status(200).json(discount)
}



//update a discount
const updateDiscount = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such discount'})
    }

    const discount = await Discount.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!discount) {
        return res.status(404).json({error: 'No such discount'})
    }

    res.status(200).json(discount)
}



module.exports = {
    createDiscount,
    getDiscounts,
    getDiscount,
    deleteDiscount,
    updateDiscount
}

