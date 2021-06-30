const mongoose = require('mongoose')

const State = mongoose.model('State', {
name: {
        type: String,
        required: true,
        trim: true
    }
    // completed: {
    //     type: Boolean,
    //     default: false
    // }
})

module.exports = State