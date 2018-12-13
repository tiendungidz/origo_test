const cors = require('cors')
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(cors())

//Middleware: HTTP Proxy 
const apiProxy = proxy('/api', { 
  target: 'https://oslobysykkel.no/',
  changeOrigin: true
});
app.use('/api', apiProxy);

//Listen
app.listen(33300, () => {
  console.log('//------------------------------------------------------------')
  console.log('* For development purposes. *');
  console.log('* Made to ensure that CORS related difficultes will not be an issue in a test environment.');
  console.log('...')
  console.log('All requests to http://localhost:33000 will be redirected to https://oslobysykkel.no')
  console.log("Example: http://localhost:33000/api/v1/stations -> https://oslobysykkel.no/api/v1/stations")
  console.log('//------------------------------------------------------------')
});