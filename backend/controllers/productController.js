const Product = require('../models/Product')
const mongoose = require('mongoose')


// get all products
const getEvery = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

const getAllProducts = async (req, res) => {
    const { category } = req.params
    const products = await Product.find({ category }).sort({createdAt : -1})
    res.status(200).json(products)
}

//get a sub-category
const getSub = async(req, res) => {
    const{ category, sub } = req.params
    const products = await Product.find({category, sub}).sort({createdAt : -1})
    res.status(200).json(products)
}


//get a single product 

const getSingleProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such product"})
    }

    const product = await Product.find({_id :ObjectId(id)})
    if(!product){
        res.status(404).json({error: "No such product"})
    }

    res.status(200).json(product)

}


//create a product
const createProduct = async (req, res) =>{
    const {title, category, image, sub} = req.body
    try {
        const product = await Product.create({title, image, category, sub})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: "error"})
    }
}

//update  a product
const updateProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid){
        res.status(404).json({ error : "No such product"})
    }

    const product = await Product.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if(!product){
        res.status(400).json({ error : "No such product"})
    }

    res.status(200).json(product)
}




//delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error : "No such product"})
    }

    const product = await Product.findOneAndDelete({_id : id})

    if(!product){
        res.status(400).json({ error : "No such product"})
    }

    res.status(200).json(product)

}



module.exports = {
    getEvery,
    getSingleProduct,
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    getSub
}