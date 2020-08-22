const express = require('express');
const app = express();
const axios = require ('axios');
const path = require('path');

const PORT = 3005;

const dist = path.join(__dirname, 'public');

app.use(express.static(dist));

//GALLERY
app.get('/property/:id', (req, res) => {
  axios.get('http://54.153.100.139:3003' + req.url)
    .then(response => {
      res.send(response.data);
    })
    .catch(console.log)
});

//CALENDAR
app.get("/listing", (req, res) => {
  var getListingAddress = 'http://localhost:2046/listing'
  axios.get(`${getListingAddress}/`)
    .then(response => {
      res.send(response.data)
    })
});

// MOREPLACES
app.all("/stays/*", (req, res) => {
  axios({
    method: req.method,
    url: "http://18.204.156.27:3001" + req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
});

app.listen(3005, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Proxy server running on: ', PORT);
  }
});