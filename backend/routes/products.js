const express = require('express')
const Product = require('../models/Product')
const requireAuth = require('../middleware/requireAuth')
const {getEvery,
    createProduct, 
    getAllProducts, 
    getSingleProduct, 
    deleteProduct, 
    updateProduct, 
    getSub} = require('../controllers/productController')

const router = express.Router()


//Get a sub-category
router.get('/:category/:sub', getSub)

// Get all products


router.get('/:category', getAllProducts)

router.use(requireAuth)

//Get single product
router.get('/fetch/:id', getSingleProduct)


router.get('/', getEvery)
//Post new product
router.post('/',createProduct)


//Delete a product
router.delete('/:id', deleteProduct)

//Update a product
router.patch('/:id', updateProduct)

module.exports = router