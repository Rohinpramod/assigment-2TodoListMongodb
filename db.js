const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MongoDB_URI

const connectDB = async()=>{
    await mongoose.connect(uri)

}
connectDB().catch(error=>console(error))

module.exports = connectDB