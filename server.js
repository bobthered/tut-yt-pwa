const dotenv = require('dotenv');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5500;

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/topHeadlines', async (req, res) => {
  const response = await fetch(
    `${process.env.TOP_HEADLINES_URL}${process.env.API_KEY}`,
  );
  const json = await response.json();
  res.json(json);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
