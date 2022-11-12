const mongoose = require('mongoose')
const juegosSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        imagen: {
            type: String, 
            required: true
        },
        edad: {
            type: Number,
            required: true     
        },
        ram: {
            type: Number,
            required: true
        },
        genero: {
            type: String,
            required: true
        }
    }
)
starsSchema.statics.collectStars = collectStars


function collectStars(starInfo){
    if(!starInfo) throw new Error('stars is required')
    return this.findOne({id_busqueda: starInfo})
        .then(star => {
            const newStar = {
                stars: starInfo
            }
            return this.create(newStar)
        })
        .then(starCreated =>  starCreated)
    }

module.exports = mongoose.model('stars', starsSchema)