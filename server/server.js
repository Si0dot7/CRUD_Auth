const express = require('express')
const productRouter = require('./routes/product')
const registerRouter = require('./routes/auth')
const connectDB = require('./config/db')


const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb'}))

app.use('/api', productRouter)
app.use('/api', registerRouter)

app.listen(5001,()=>console.log('server is running'))
