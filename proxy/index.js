const express = require('express');
const app = express();
const axios = require ('axios');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3005;

const dist = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(dist));

//GALLERY
app.get('/property/:id', (req, res) => {
  axios.get('http://54.215.39.92:3003' + req.url)
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
app.get('/stays/*', (req, res) => {
  axios.get("http://18.204.156.27:3001"+req.originalUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/stays/*', (req, res) => {
  axios.post("http://18.204.156.27:3001"+req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/stays/*', (req, res) => {
  axios.put("http://18.204.156.27:3001"+req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(3005, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Proxy server running on: ', PORT);
  }
});