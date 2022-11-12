const starsRouters = require('./routes/star')
const userRouters = require('./routes/user')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const initDB = require('./config/db')
require('dotenv').config()


app.use(express.static(path.join(__dirname, '/public/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/account', userRouters)
app.use('/calification', starsRouters)
app.listen(process.env.PORT, () => {
    console.log('La app está en linea ', process.env.PORT)
})

initDB()