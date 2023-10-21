const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    sub: {
        type : String
    }
})

module.exports = mongoose.model('Product', productSchema)