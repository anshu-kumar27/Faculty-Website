const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter cource name']
    },
    icon: {
        type: {
            url: {
                type: String,
                required: true,
            },
        },
        required: true,
    },

})

module.exports = mongoose.model('Courses', courseSchema)