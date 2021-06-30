const mongoose = require('mongoose')

const District = mongoose.model('District', {
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

module.exports = District