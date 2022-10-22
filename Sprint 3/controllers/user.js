const getModelByName = require('../config/getModelByName')
const path = require('path')



module.exports.signup = (req, res) => {
    if(!req.body) return res.status(200).send({success: false, error: 'User info not found'})
    const user = getModelByName('user')
    try {
        user.signup(req.body)
            .then(() => {
                res.status(200).redirect('/searchLogin.html')
            }) 
    }catch (err) {
        res.status(500).send({success: false, error: err.message})
    }
}

module.exports.login = (req, res) => {
    if(!req.body.email) return res.status(200).send({success: false, error: 'Email is not provided'})
    if(!req.body.password) return res.status(200).send({success: false, error: 'Password is not provided'})

    const user = getModelByName('user')
    try {
        user.login(req.body.email, req.body.password)
            .then(data => {
                res.status(200).redirect('/searchLogin.html')
            }).catch (err => res.status(200).send({success: false, error: err.message}))    
    }catch (err) {
        res.status(500).send({success: false, error: err.message})
    }
}