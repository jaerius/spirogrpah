const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/proxy/:url(*)', (req, res) => {
  const url = req.params.url;
  axios({
    url,
    method: 'GET',
    responseType: 'stream'
  }).then(response => {
    response.data.pipe(res);
  }).catch(error => {
    res.status(500).send(error.toString());
  });
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
