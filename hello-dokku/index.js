const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`<html><head><title>Hello Dokku</title></head>
      <body><img src="/public/dokku-logo.png" alt="Dokku Logo" /></body>
      </html>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

