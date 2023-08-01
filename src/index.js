const express = require('express');
const cors = require('cors');
const app = express();
const serverless = require('serverless-http');
const router = express.Router();

app.use(cors());

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1>
  <a href="/about">About Page</a>`);
});
app.get('/about', (req, res) => {
  res.send(`<h1>About Page</h1>
  <a href="/">Home Page</a>`);
});

app.use('/', app);
module.exports.handler = serverless(app);
