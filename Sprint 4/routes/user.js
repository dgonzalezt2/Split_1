const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/signUp', controller.signup)
router.post('/authenticate', controller.login)

module.exports = router
