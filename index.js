const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const connectDB = require('./db')
const todoRouter = require('./Routes/todoRouter')

connectDB()

app.get('/',(req,res)=>{
    res.send("welcome to todoList")
})

app.use(express.json())

app.use('/api',todoRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
