require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express() 

const productRoutes = require('./routes/products')
const adminRoutes = require('./routes/admin')

app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/products', productRoutes)
app.use('/api/admin', adminRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log("hiiii")
    }
    )
})
.catch((err) =>{
    console.log(err)
})

