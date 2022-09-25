const express = require('express')
const cors = require ('cors')
const port = 5000

const app = express()

app.get('/', (req, res) => {
  res.send("Welcome to FreeFlow")
});

app.post('/submitData', (req, res) => {
  res.send("OK")
});

app.listen(port, () => {
  console.log("Listening on {$port}")
});
