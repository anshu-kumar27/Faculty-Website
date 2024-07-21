const app = require('./app')
const connectToDb = require('./config/database')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary')

// CONFIG 
dotenv.config({ path: 'config/config.env' })

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// CONNETING TO DATABASE
connectToDb()
    .then(() => {
        // Starting the server
        app.listen(process.env.PORT, () => {
            console.log(`Server is working on http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
