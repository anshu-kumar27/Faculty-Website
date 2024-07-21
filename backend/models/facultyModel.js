const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "Please Enter Your First Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    email: {
        type: String,
        required: [true, 'Please enter your Email'],
    },
    description: {
        type: String,
        required: [true, 'Enter Your Description'],
        minLength: [20, "Description should be greater than 20 characters"],
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            }
        },
    ],
    post: {
        type: String,
        required: [true, 'Please enter your Post']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    courses : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Courses'
        }
    ]
})


module.exports = mongoose.model('Faculty', facultySchema)