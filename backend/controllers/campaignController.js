const Campaign = require('../models/CampaignModels')
const mongoose = require('mongoose')

//get all campaigns
const getCampaigns = async (req, res) => {
   const campaigns = await Campaign.find({}).sort({createdAt: -1})

   res.status(200).json(campaigns)
}



//get a single campaign
const getCampaign = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such campaign'})
    }

    const campaign = await Campaign.findById(id)

    if (!campaign) {
        return res.status(404).json({error: 'No such campaign'})
    }

    res.status(200).json(campaign)
}



//create a campaign
const createCampaign = async (req, res) => {
    const {title, type, discription, occation, from, to} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!type) {
        emptyFields.push('type')
    }
    if(!discription) {
        emptyFields.push('discription')
    }
    if(!occation) {
        emptyFields.push('occation')
    }
    if(!from) {
        emptyFields.push('from')
    }
    if(!to) {
        emptyFields.push('to')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    


    /*// check if an image is included in the request
    if (!req.files || !req.files.image) {
       return res.status(400).json({error: 'Please include an image'})
    }

    const image = req.files.image;

    // check if the image size is within the allowed limit
    if (image.size > 1000000) {
       return res.status(400).json({error: 'Image size too large'})
    }

// check if the image type is valid
if (!image.mimetype.startsWith('image/')) {
    return res.status(400).json({error: 'Invalid image type'})
}

// generate a unique filename for the image
const fileName = Date.now() + '-' + image.name

// store the image in a designated folder
image.mv('./uploads/' + fileName, async (error) => {
    if (error) {
        console.error(error)
        return res.status(500).json({error: 'Failed to upload image'})
    }*/
    




    //add doc to db
    try {
      const campaign = await Campaign.create({title, type, discription, occation, from, to, /*image: fileName*/})
      res.status(200).json(campaign)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}



//delete a campaign
const deleteCampaign = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such campaign'})
    }

    const campaign = await Campaign.findOneAndDelete({_id: id})

    if (!campaign) {
        return res.status(404).json({error: 'No such campaign'})
    }

    res.status(200).json(campaign)
}



//update a campaign
const updateCampaign = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such campaign'})
    }

    const campaign = await Campaign.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!campaign) {
        return res.status(404).json({error: 'No such campaign'})
    }

    res.status(200).json(campaign)
}



module.exports = {
    createCampaign,
    getCampaigns,
    getCampaign,
    deleteCampaign,
    updateCampaign
}

