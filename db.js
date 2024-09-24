const mongoose = require('mongoose')
require('dotenv').config()
const uri = 'mongodb+srv://rohinpramod320:2qAMzZxUowWc0Ksl@cluster0.jjho3.mongodb.net/todoList?retryWrites=true&w=majority'
const connectDB = async ()=>{
    await mongoose.connect(uri)
}

connectDB().catch(error=>console.log(error))

module.exports = connectDB