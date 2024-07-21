const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database connected!`);
    } catch (error) {
        console.error(`Error connecting to the database`);
        console.error(`Error: ${error.message}`);
        throw error
    }
};

module.exports = connectToDB