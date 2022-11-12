const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var user = mongoose.model('user');

const starsSchema = new mongoose.Schema(
    {
        stars: {
            type: Object,
            required: true,
        },
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