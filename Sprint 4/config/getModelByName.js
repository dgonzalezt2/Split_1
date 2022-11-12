const mongoose = require('mongoose');
require('../models/user');
require('../models/stars')
function getModelByName(name) {
    return mongoose.model(name)
}

module.exports = getModelByName;