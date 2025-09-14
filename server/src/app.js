const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express()

connectDB()

const productRoutes = require('./router/product')

app.use(morgan('dev'))

app.use(`/api`, productRoutes)

module.exports = app