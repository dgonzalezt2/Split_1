const mongoose = require('mongoose')
module.exports = () => {
    const connect = () => {
        mongoose.connect(
            process.env.MONGO_HOST, {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true 
            },
            (err) => {
                if(err){
                    console.log('DB: ERROR !!')
                } else {
                    console.log('Conexión correcta')
                }
            }
        )
    }
    connect();
}