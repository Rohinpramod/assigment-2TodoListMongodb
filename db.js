const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    await mongoose.connect(process.env.MongoDB_URI)

}
connectDB().catch(error=>console(error))

module.exports = connectDB