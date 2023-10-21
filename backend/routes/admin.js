const express = require('express')
const {loginAdmin, newAdmin} = require('../controllers/adminController')

const router = express.Router()


//login route
router.post('/login', loginAdmin)

//new admin

router.post('/new', newAdmin)


module.exports = router