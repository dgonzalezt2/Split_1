const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isValidEmail} = require('../helpers')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
)
userSchema.statics.signup = signup
userSchema.statics.login = login

mongoose.model('user', userSchema, 'users')

function signup(userInfo){
    if(!userInfo.name) throw new Error('name is required')
    if(!userInfo.email || !isValidEmail(userInfo.email)) throw new Error('email is invalid')
    if(!userInfo.password) throw new Error('password is required')

    return this.findOne({email: userInfo.email})
        .then(user => {
            if(user) throw new Error('user already exists')
            const newUser = {
                email: userInfo.email,
                password: bcrypt.hashSync(userInfo.password, 9),
                name: userInfo.name
            };
            return this.create(newUser)
        })
        .then(userCreated =>  userCreated)
    }

function login(email, password){
    if(!isValidEmail(email)) throw new Error('email is invalid')

    return this.findOne({ email })
        .then(user => {
            if(!user) throw new Error ('incorrect credentials')
            const isMatch = bcrypt.compareSync(password, user.password)
            if(!isMatch) throw new Error('Incorrect credentials')
            const userObject = {
                _id: user._id,
                email: user.email,
                lastName: user.lastName
            }
            const access_token = jwt.sign(Object.assign({}, userObject), process.env.TOKEN_SECRET, {
                expiresIn: 60 * 60 * 8,
            })
            return {
                access_token,
            }
        })

}
module.exports = mongoose.model('user', userSchema)