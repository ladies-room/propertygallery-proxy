const express = require('express');
const path = require('path')
const app = express();

const PORT = 3005;
const dist = path.join(__dirname, '../public');

app.use(express.static(dist));
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server running on: ', PORT);
  }
});