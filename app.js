const express = require('express')
const data = require('./data/social.json');
const path = require('path')



const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('group4!')
})

app.get('/home', (req, res) => {
  res.send('Hello World!')
})


app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/social', (req, res) => {
  res.json(data);
})

app.listen(port, () => {
  console.log(`this is my URL: http://localhost:${port}`)
})