'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// App
const app = express();
app.get('*', (_req, res) => {
  const randomLength = getRandomNumberBetween(1, 10)
  res.json(new Array(randomLength).fill(null).map(() => getRandomNumberBetween(0, 100)))
});

app.listen(PORT, HOST);
