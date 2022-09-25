const express = require('express')
const cors = require ('cors')
const port = 3000

const app = express()

app.get('/', (req, res) => {
  res.send("Welcome to FreeFlow")
})

app.listen(port, () => {
  console.log("Listening on $port")
})
