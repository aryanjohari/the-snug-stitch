const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '8h'})
}

const loginAdmin = async (req, res) => {

    const { email, password } = req.body
    try{
        const loginadmin = await Admin.login(email, password)
        const token = createToken(loginadmin._id)

        res.status(200).json({email, token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const newAdmin = async (req, res) => {
    const { email, password } = req.body

    try {
        const newadmin = await Admin.signup(email, password)

        const token = createToken(newadmin._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = {
    loginAdmin,
    newAdmin
}