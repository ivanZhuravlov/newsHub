const express = require('express')
const app = express()
const morgan = require('morgan')

require('dotenv').config()

console.log(process.env.PORT)

const PORT = process.env.PORT || 7777
app.use(morgan('combined'))
app.use(express.json())

app.use('/api/info', require('./app/routes/info'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
