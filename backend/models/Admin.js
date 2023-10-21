const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

adminSchema.statics.signup = async function(email, password) {

    if(!email || !password){
        throw Error("All fields must be filled.")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not Valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough. Use uppercase, lowercase, numbers and special characters.")
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error("Email already in use.");
        return
    }

    const salt = await bcrypt.genSalt(20)
    const hash = await bcrypt.hash(password, salt)


    const admin = await this.create({email, password: hash})

    return admin
}

adminSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error("All fields must be filled.")
    }

    const currAdmin = await this.findOne({email})
    if(!currAdmin){
        throw Error("Incorrect email.")
    }

    const match = await bcrypt.compare(password, currAdmin.password)

    if(!match){
        throw Error("Password incorrect.")

    }

    return currAdmin

}


module.exports = mongoose.model('Admin', adminSchema)