const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app