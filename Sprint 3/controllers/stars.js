const getModelByName = require('../config/getModelByName')
const path = require('path')

module.exports.stars = (req, res) => {
    if(!req.body) return res.status(200).send({success: false, error: 'No stars'})
    const stars = getModelByName('stars')
    try {
        stars.collectStars(req.body)
            .then(() => {
                res.status(200).redirect('mostrarJuegos.html')
            })
    } catch (err) {
        res.status(500).send({success: false, error: err.message})
    }
}