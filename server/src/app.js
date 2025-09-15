const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')

const app = express()

connectDB()

const productRoutes = require('./router/product')

app.use(express.json())

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})
app.use(morgan('Method: :method\nRes: :status\nPath: :url\nBody: :body\n------ (:total-time[0]ms)'))

app.use(`/api`, productRoutes)

module.exports = app