const express = require('express')
const router = express.Router()
const controller = require('../controllers/stars')

router.post('/star', controller.stars)

module.exports = router