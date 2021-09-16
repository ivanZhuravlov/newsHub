const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()

const PORT = process.env.PORT || 7777
app.use(morgan('combined'))
app.use(express.json())

app.use('/api/info', require('./app/routes/info'))
app.use('/api/news', require('./app/routes/news'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
