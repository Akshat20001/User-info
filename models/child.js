const mongoose = require('mongoose')

const Child = mongoose.model('Child', {
childs: {
        type: String,
        required: true,
        trim: true
    }
    // completed: {
    //     type: Boolean,
    //     default: false
    // }
})

module.exports = Child