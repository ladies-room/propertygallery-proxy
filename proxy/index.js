const express = require('express');
const app = express();
const axios = require ('axios');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = 3005;

const dist = path.join(__dirname, 'public');
console.log(dist)

app.use(express.static(dist));

app.use('/property/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3005, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Proxy server running on: ', PORT);
  }
});