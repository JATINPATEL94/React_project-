const connectToMongo = require("./db");
const express = require('express')

connectToMongo();
const app = express()
const port = 3001

app.use(express.json()) // app.use is a middleware for access jsone 

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
  console.log(`NOTEAPP Backend listening on port http://localhost:${port}`)
})