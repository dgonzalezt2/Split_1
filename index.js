const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) =>{
    res.send({
        data: 'hola mundo'
    })
})

app.listen(port, () => {
    console.log('La app está en linea')
})