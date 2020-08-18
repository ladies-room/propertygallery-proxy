const express = require('express');
const path = require('path')
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const serverOne = 'http://localhost:3003';


const PORT = 3005;

const dist = path.join(__dirname, '../public');

app.use(express.static(dist));
app.use(express.json());

app.all('/property/26', function(req, res) {
  console.log('Redirecting to ServerOne');
  apiProxy.web(req, res, {target: serverOne});
});


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server running on: ', PORT);
  }
});