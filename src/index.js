require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const mongoStringConnection = process.env.DATABASE_URL;

mongoose.connect(mongoStringConnection)
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express()
app.use(express.json());
app.use("/api", routes)

app.get("/", (req, res) => {
  res.status(200).json({ok: true})
})

app.listen(3200, () => {
  console.log(`Server Started at ${3200}`)
})
