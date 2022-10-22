const mongoose = require('mongoose')

const starsSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        id_busqueda: {
            type: String,
            required: true,
        },
        stars: {
            type: int,
            required: true,
        }
    }
)
userSchema.statics.collectStars = collectStars

mongoose.model('star', starsSchema, 'stars')

function collectStars(starInfo){
    if(!userInfo.stars) throw new Error('stars is required')
    
    return this.findOne({id_busqueda: starInfo.id_busqueda})
        .then(star => {
            if(star) throw new Error('Already calificated')
            const newStar = {
                _id: 1,
                id_busqueda: 1,
                stars: starInfo.stars
            }
            return this.create(newStar)
        })
        .then(starCreated =>  starCreated)
    }