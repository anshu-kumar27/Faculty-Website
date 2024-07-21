const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())

const errorMiddleWare = require('./middleware/error')

// ROURTES
const faculty = require('./routes/facultyRoutes')
const course = require('./routes/courseRoutes')

app.use('/uni/faculty' , faculty)
app.use('/uni/courses' , course)

// MIDDLEWARE for errors
app.use(errorMiddleWare)


module.exports = app;