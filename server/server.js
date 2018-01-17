
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

var bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data

let newCardTitle

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})

app.post('/api/sticker_info', (req, res, next) => {
  console.log(req.body)
  res.json(req.body)
  newCardTitle = req.body
})

app.get('/api/sticker_info', (req, res, next) => {
  console.log(newCardTitle)
  res.json(newCardTitle)
})

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
