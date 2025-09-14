const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/commerce-list`
    const conn = await mongoose.connect(mongoURI)
    console.log(`MongoDB Conectado: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1)
  }
}

module.exports = connectDB