const Stock = require('../models/StockModels')
const mongoose = require('mongoose')

//get all stocks
const getStocks = async (req, res) => {
   const stocks = await Stock.find({}).sort({createdAt: -1})

   res.status(200).json(stocks)
}



//get a single stock
const getStock = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such stock'})
    }

    const stock = await Stock.findById(id)

    if (!stock) {
        return res.status(404).json({error: 'No such stock'})
    }

    res.status(200).json(stock)
}



//create a stock
const createStock = async (req, res) => {
    const { title, type, productid, stockid, discount } = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!type) {
        emptyFields.push('type')
    }
    if(!productid) {
        emptyFields.push('productid')
    }
    if(!stockid) {
        emptyFields.push('stockid')
    }
    if(!discount) {
        emptyFields.push('discount')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    
    //add doc to db
    try {
      const stock = await Stock.create({title, type, productid, stockid, discount})
      res.status(200).json(stock)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}



//delete a stock
const deleteStock = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such stock'})
    }

    const stock = await Stock.findOneAndDelete({_id: id})

    if (!stock) {
        return res.status(404).json({error: 'No such stock'})
    }

    res.status(200).json(stock)
}



//update a stock
const updateStock = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such stock'})
    }

    const stock = await Campaign.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!stock) {
        return res.status(404).json({error: 'No such stock'})
    }

    res.status(200).json(stock)
}



module.exports = {
    createStock,
    getStocks,
    getStock,
    deleteStock,
    updateStock
}