const express = require('express')
const app = express()

const port = 1234  //port no mungwaya

// cors
const cors = require('cors');

app.use(express.json())   //json stringify k liye
app.use(cors());
const path = require('path')
const clientpath = path.join(__dirname,'./frontend/dist')
app.use('/',express.static(clientpath))

// MAIN ENVIRONMENT VARIABLES
const MONGO_URL= 'mongodb+srv://mahnooryameen22:jwGWHCXqwkPtRK3m@cluster0.dffwplx.mongodb.net/?retryWrites=true&w=majority'
const JWT_SECRET='hellohello'
const NODEMAILER_EMAIL='mahnooryameen22@gmail.com'
const NODEMAILER_PASSWORD='tdxw kbqq svqm sref'
module.exports={MONGO_URL, JWT_SECRET, NODEMAILER_EMAIL, NODEMAILER_PASSWORD}

// sary folders k Router files ko connect kr rhi index.js se
app.use('/api',require('./API/brands/Router'))
app.use('/api',require('./API/category/Router'))
app.use('/api',require('./API/product/Router'))
app.use('/api',require('./API/user/Router'))
app.use('/api',require('./API/order/Router'))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./frontend/dist/index.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})

// Export the app as a Vercel serverless function
module.exports = app;
