'use strict';

const express = require('express');
const fetch = require('node-fetch')
const { table, getBorderCharacters } = require('table')

// Constants
const PORT = 3333;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('*', (req, res) => {

  fetch('http://node-api:8080/')
    .then(res => res.json())
    .then(json => {
      const tableText = table(json.map((value, i) => [i, value]), {
        border: getBorderCharacters('norc'),
      })
      res.send(`
        <h1>${json.length} results</h1>
        <pre>${tableText}</pre>
      `)
    });

});

app.listen(PORT, HOST);
